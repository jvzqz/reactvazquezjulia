import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../service/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const collectionProd = collection(db, 'productos');
            const refAlDoc = doc(collectionProd, id);
            
            try {
                const docSnapshot = await getDoc(refAlDoc);
                if (docSnapshot.exists()) {
                    const productData = docSnapshot.data();
                    setProducto({
                        id:id,
                        ...productData
                      });
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <div>
            {producto && <ItemDetail producto={producto} />}
        </div>
    );
};

export default ItemDetailContainer;