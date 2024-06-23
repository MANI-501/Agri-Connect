/* eslint-disable react/prop-types */
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";

const hubs = [
    "1st arrondissement 'The Louvre'",
    "2nd arrondissement 'The Stock Exchange'",
    "3rd arrondissement 'The Temple'",
    "4th arrondissement 'The City Hall'",
    "5th arrondissement 'The Pantheon'",
    "6th arrondissement 'The Luxembourg'",
    "7th arrondissement 'The Palais Bourbon'",
    "8th arrondissement 'The Elysee'",
    "9th arrondissement 'The Opera'",
    "10th arrondissement 'The Warehouse'",
    "11th arrondissement 'Popincourt'",
    "12th arrondissement 'Reuilly'",
    "13th arrondissement 'The Gobelins'",
    "14th arrondissement 'The Observatory'",
    "15th arrondissement 'Vaugirard'",
    "16th arrondissement 'Passy'",
    "17th arrondissement 'Batignolles-Monceaux'",
    "18th arrondissement 'Butte-Montmartre'",
    "19th arrondissement 'Buttes-Chaumont'",
    "20th arrondissement 'Menilmontant'"
];

const BuyNowModal = ({ selectedHub, setSelectedHub, buyNowFunction }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button
                type="button"
                onClick={handleOpen}
                className="w-full px-4 py-3 text-center text-gray-100 bg-orange-600 border border-transparent dark:border-gray-700 hover:border-orange-500 hover:text-orange-700 hover:bg-orange-100 rounded-xl"
            >
                Buy now
            </Button>
            <Dialog open={open} handler={handleOpen} className="bg-orange-50">
                <DialogBody className="">
                    {/* Ensure proper height and scrolling capability */}
                    <div className="container mx-auto px-4 max-w-2xl py-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Select a Hub</h1>
                        <div className="grid grid-cols-2 gap-4 overflow-y-auto max-h-96">
                            {hubs.map((hub, index) => (
                                <div
                                    key={index}
                                    className={`p-4 border rounded-lg cursor-pointer ${selectedHub === hub ? 'bg-orange-100 border-orange-500' : 'bg-white border-gray-200'
                                        }`}
                                    onClick={() => setSelectedHub(hub)}
                                >
                                    <h2 className="text-lg font-semibold text-gray-900">{hub}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-white">
                        <Button
                            type="button"
                            onClick={() => {
                                handleOpen();
                                buyNowFunction();
                            }}
                            className="w-full px-4 py-3 text-center text-gray-100 bg-orange-600 border border-transparent dark:border-gray-700 rounded-lg"
                        >
                            Confirm and Buy
                        </Button>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
}

export default BuyNowModal;
