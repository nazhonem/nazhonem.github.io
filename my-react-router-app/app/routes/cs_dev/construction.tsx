/* Under construction page */

import DevNavbar from "./components/DevNavbar";
import {Button} from "@heroui/button";

export default function DevConstruction() {
  return (
    <div className="purple-dark h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
        <DevNavbar />
        <div className="max-w-xl mt-8 mx-auto p-6 bg-white border rounded-lg shadow-sm">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">This page is still under construction!</h5>
            <p className="mb-3 font-normal text-gray-700">Apologies for the inconvience. I am doing my best to get this up as soon as possible. Thank you for understanding!</p>
            
            <div className="text-center">
                <Button 
                    as="a" 
                    href="/cs_dev" 
                    color="primary"
                    variant="solid"
                    className="mt-10 p-2 rounded-md m-5">
                    Back to Dev Home
                </Button>
            </div>
        </div>
    </div>
  );
}