import { useState } from "react";
import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import Loader from "../../components/loader/Loader";

const AllProduct = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const { loading, getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const [selectedCategory, setSelectedCategory] = useState("all");

    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Add to cart");
    };

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete cart");
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    // Filter products based on selected category
    const filteredProducts = getAllProduct.filter((item) => {
        if (selectedCategory === "all") {
            return true; // Show all products
        } else {
            return item.category === selectedCategory; // Filter by category
        }
    });

    return (
        <Layout>
            <div className="py-8">
                <div>
                    <h1 className="text-center mb-5 text-2xl font-semibold">All Products</h1>
                </div>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 lg:px-0 py-5 mx-auto flex">
                        <div className="w-1/4 px-4">
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold mb-4">Categories</h2>
                                <button
                                    onClick={() => setSelectedCategory("all")}
                                    className={`block text-gray-600 hover:text-gray-800 mb-2 ${
                                        selectedCategory === "all" ? "font-bold text-gray-800" : ""
                                    }`}
                                >
                                    All
                                </button>
                                <button
                                    onClick={() => setSelectedCategory("vegetables")}
                                    className={`block text-gray-600 hover:text-gray-800 mb-2 ${
                                        selectedCategory === "vegetables" ? "font-bold text-gray-800" : ""
                                    }`}
                                >
                                    Vegetables
                                </button>
                                <button
                                    onClick={() => setSelectedCategory("fruits")}
                                    className={`block text-gray-600 hover:text-gray-800 mb-2 ${
                                        selectedCategory === "fruits" ? "font-bold text-gray-800" : ""
                                    }`}
                                >
                                    Fruits
                                </button>
                            </div>
                        </div>
                        <div className="w-3/4">
                            <div className="flex justify-center">
                                {loading && <Loader />}
                            </div>
                            <div className="flex flex-wrap -m-4">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((item, index) => (
                                        <div key={index} className="p-4 w-full md:w-1/3" style={{ minHeight: "400px" }}>
                                            <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                                <img
                                                    onClick={() => navigate(`/productinfo/${item.id}`)}
                                                    className="object-cover h-60 w-full"
                                                    src={item.productImageUrl}
                                                    alt={item.title}
                                                />
                                                <div className="p-6">
                                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                        AgriConnect
                                                    </h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                        {item.title.substring(0, 25)}
                                                    </h1>
                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                        €{item.price} per {item.quantityP ?? 1} {item.quantityUnit ?? "kg"}
                                                    </h1>
                                                    <div className="flex justify-center">
                                                        {cartItems.some((p) => p.id === item.id) ? (
                                                            <button
                                                                onClick={() => deleteCart(item)}
                                                                className="bg-red-700 hover:bg-orange-600 w-full text-white py-[4px] rounded-lg font-bold"
                                                            >
                                                                Delete From Cart
                                                            </button>
                                                        ) : (
                                                            <button
                                                                onClick={() => addCart(item)}
                                                                className="bg-orange-500 hover:bg-orange-600 w-full text-white py-[4px] rounded-lg font-bold"
                                                            >
                                                                Add To Cart
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="w-full text-center py-8">
                                        {selectedCategory === "all" ? (
                                            <p>Sorry, No Items at this moment!</p>
                                        ) : selectedCategory === "vegetables" ? (
                                            <p>Sorry, No vegetables at this moment!</p>
                                        ) : selectedCategory === "fruits" ? (
                                            <p>Sorry, No fruits at this moment!</p>
                                        ) : (
                                            <p>Sorry, No Items at this moment!</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default AllProduct;
