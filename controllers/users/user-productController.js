import { UserProduct } from "../../models/users/UserProduct.js";

export const getUserProducts = async (req, res) => {
  try {
    const userProducts = await UserProduct.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({ message: "Något gick fel i user product lista" });
  }
};

export const createUserProduct = async (req, res) => {
  const { name, hobbies, electronics, furnitures, houses, vehicles, clothes } =
    req.body;

  try {
    const userProduct = new UserProduct({
      name,
      hobbies,
      electronics,
      furnitures,
      houses,
      vehicles,
      clothes,
    });

    userProduct = await userProduct.save();
    console.log("Ny produkt lista", userProduct);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).send("Wrong");
  }
};

export const countUserproducts = async (req, res) => {
  try {
    const countedDocument = await UserProduct.find().toArray().countDocuments();
    res.status(200).send(countedDocument);
  } catch (error) {
    re.status(500).json({ success: false });
  }
};
