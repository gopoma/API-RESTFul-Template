const User = require("../models/user");

class Users {
    async getAll() {
        try {
            const users = await User.find();
            // Ya tenemos disponibles los datos

            return users; // Array de objetos
        } catch(error) {
            console.log(error);
        }
    }

    async getByEmail(email) {
        try {   
            const user = await User.findOne({ email });
            // Ya tenemos disponibles los datos

            return user; // Objeto
        } catch(error) {
            console.log(error);
        }
    }

    async create(data) {
        try {
            const user = await User.create(data);
            // Ya tenemos disponibles los datos

            return user; // Objeto
        } catch(error) {
            if(error.code === 11000) {
                const message = `El correo "${error.keyValue.email} ya está en uso"`;

                return {
                    error: true,
                    message
                };
            }
        }
    }

    // TODO: Implementation of the UPDATE and DELETE Http Methods
    async update(id, data) {
        try {
            const user = await User.findByIdAndUpdate(id, data, {new: true});

            return user;
        } catch(error) {
            console.log(error);
        }
    }

    async delete(id) {
        try {
            const user = await User.findByIdAndDelete(id);

            return user;
        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = Users;