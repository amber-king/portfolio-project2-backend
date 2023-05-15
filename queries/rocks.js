const db = require("../db/dbConfig.js");

// All Rocks
// /rocks
const getAllRocks = async () => {
  try {
    const allRocks = await db.any("SELECT * FROM rocks");
    return allRocks;
  } catch (error) {
    return { error };
  }
};

// One Rock
// /rocks/:id
const getOneRock = async (id) => {
  try {
    const oneRock = await db.oneOrNone("SELECT * FROM rocks WHERE id=$1", id);
    return oneRock;
  } catch (error) {
    return { error };
  }
};

//Create One
// /rocks/
const createOneRock = async (rock) => {
  try {
    const createdRock = await db.one(
      "INSERT INTO rocks(name, element,where_found,color,texture,luster,hardness) VALUES ($1, $2, $3, $4, $5, $6,$7) RETURNING *;",
      [
        rock.name,
        rock.element,
        rock.where_found,
        rock.color,
        rock.texture,
        rock.luster,
        rock.hardness,
      ]
    );
    return createdRock;
  } catch (error) {
    return { error };
  }
};

//Update
// /rocks/:id
const updateOneRock = async (id, rock) => {
  try {
    const updatedRock = await db.one(
      "UPDATE rocks SET name=$1, element=$2, where_found=$3, color=$4, texture=$5, luster=$6,hardness=$7  WHERE snack_id=$8 RETURNING *;",
      [
        rock.name,
        rock.element,
        rock.where_found,
        rock.color,
        rock.texture,
        rock.luster,
        rock.hardness,
        id,
      ]
    );
    return updatedRock;
  } catch (error) {
    return { error };
  }
};

//Delete
// /rocks/:id
const deleteOneRock = async (id) => {
  try {
    const deletedRock = await db.one(
      "DELETE FROM rocks WHERE id=$1 RETURNING *;",
      id
    );
    return deletedRock;
  } catch (error) {
    return { error };
  }
};

module.exports = {
  getAllRocks,
  getOneRock,
  createOneRock,
  updateOneRock,
  deleteOneRock,
};
