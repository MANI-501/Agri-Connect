import { useNavigate, useParams } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect, useState } from "react";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";
import Layout from "../../components/layout/Layout";

const categoryList = [
    {
        name: 'vegetables'
    },
    {
        name: 'fruits'
    },
]

const UpdateProductPageF = () => {
    const context = useContext(myContext);
    const { loading, setLoading, getAllProductFunction } = context;

    // navigate 
    const navigate = useNavigate();
    const { id } = useParams()
    // console.log(id)

    // product state
    const [product, setProduct] = useState({
        title: "",
        price: "",
        quantityUnit: "piece", // New field for quantity unit
        quantityP: 1, // New field for quantity unit
        productImageUrl: "",
        category: "",
        description: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });

    // Get Single Product Function
    const getSingleProductFunction = async () => {
        try {
            const productTemp = await getDoc(doc(fireDB, "products", id))
            //   console.log(product.data())
            const product = productTemp.data();
            setProduct({
                title: product?.title,
                price: product?.price,
                productImageUrl: product?.productImageUrl,
                category: product?.category,
                description: product?.description,
                quantityP : product?.quantityP,
                time: product?.time,
                date: product?.date,
                quantityUnit: product?.quantityUnit,
            })
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const updateProduct = async () => {
        setLoading(true)
        try {

            await setDoc(doc(fireDB, 'products', id), product)
            toast.success("Product Updated successfully")
            getAllProductFunction();
            setLoading(false)
            navigate('/admin-dashboard')

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getSingleProductFunction();
    }, []);
    return (
        <Layout>
            <div className="mt-4">
                <div className='flex justify-center items-center' style={{ minHeight: "600px" }}>
                    {loading && <Loader />}
                    {/* Login Form  */}
                    <div className="login_Form bg-orange-50 px-8 py-6 border border-orange-100 rounded-xl shadow-md">

                        {/* Top Heading  */}
                        <div className="mb-5">
                            <h2 className='text-center text-2xl font-bold text-orange-500 '>
                                Update Product
                            </h2>
                        </div>

                        {/* Input One  */}
                        <div className="mb-3">
                            <input
                                type="text"
                                name="title"
                                value={product.title}
                                onChange={(e) => {
                                    setProduct({
                                        ...product,
                                        title: e.target.value
                                    })
                                }}
                                placeholder='Product Title'
                                className='bg-orange-50 border text-orange-300 border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-300'
                            />
                        </div>

                        {/* Input Two  */}
                        <div className="mb-3">
                            <input
                                type="number"
                                name="price"
                                value={product.price}
                                onChange={(e) => {
                                    setProduct({
                                        ...product,
                                        price: e.target.value
                                    })
                                }}
                                placeholder='Product Price'
                                className='bg-orange-50 border text-orange-300 border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-300'
                            />
                        </div>

                        {/* Input Six - Quantity */}
                        <div className="mb-3 flex justify-between items-center">
                            <span className="text-orange-300 me-2">per</span>
                            <input
                                type="number"
                                name="quantity"
                                value={product.quantityP}
                                onChange={(e) => {
                                    setProduct({
                                        ...product,
                                        quantityP: e.target.value
                                    });
                                }}
                                placeholder='Quantity'
                                className='bg-orange-50 border text-orange-300 border-orange-200 px-2 py-2 w-48 rounded-md outline-none placeholder-orange-300'
                            />
                            <select
                                value={product.quantityUnit}
                                onChange={(e) => {
                                    setProduct({
                                        ...product,
                                        quantityUnit: e.target.value
                                    });
                                }}
                                className="w-46 px-2 py-2 text-orange-300 bg-orange-50 border border-orange-200 rounded-md outline-none"
                            >
                                <option value="piece">piece</option>
                                <option value="kg">kg</option>
                                <option value="gram">gram</option>
                                <option value="litre">litre</option>
                                <option value="ml">ml</option>
                            </select>
                        </div>

                        {/* Input Three  */}
                        <div className="mb-3">
                            <input
                                type="text"
                                name="productImageUrl"
                                value={product.productImageUrl}
                                onChange={(e) => {
                                    setProduct({
                                        ...product,
                                        productImageUrl: e.target.value
                                    })
                                }}
                                placeholder='Product Image Url'
                                className='bg-orange-50 border text-orange-300 border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-300'
                            />
                        </div>

                        {/* Input Four  */}
                        <div className="mb-3">
                            <select
                                value={product.category}
                                onChange={(e) => {
                                    setProduct({
                                        ...product,
                                        category: e.target.value
                                    })
                                }}
                                className="w-full px-1 py-2 text-orange-300 bg-orange-50 border border-orange-200 rounded-md outline-none  ">
                                <option disabled>Select Product Category</option>
                                {categoryList.map((value, index) => {
                                    const { name } = value
                                    return (
                                        <option className=" first-letter:uppercase" key={index} value={name}>{name}</option>
                                    )
                                })}
                            </select>
                        </div>

                        {/* Input Five  */}
                        <div className="mb-3">
                            <textarea
                                value={product.description}
                                onChange={(e) => {
                                    setProduct({
                                        ...product,
                                        description: e.target.value
                                    })
                                }} name="description" placeholder="Product Description" rows="5" className=" w-full px-2 py-1 text-orange-300 bg-orange-50 border border-orange-200 rounded-md outline-none placeholder-orange-300 ">

                            </textarea>
                        </div>

                        {/* Update Product Button  */}
                        <div className="mb-3">
                            <button
                                onClick={updateProduct}
                                type='button'
                                className='bg-orange-500 hover:bg-orange-600 w-full text-white text-center py-2 font-bold rounded-md '
                            >
                                Update Product
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default UpdateProductPageF;
