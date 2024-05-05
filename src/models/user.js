export class User{

    constructor(id, name, phone, email) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
    }  

    toFirestore(user){
        return {
            name: user.name,
            phone: user.phone,
            email: user.email
        };
    }

    fromFirestore(snapshot, options){
        const data = snapshot.data(options);
        return new User(data.name, data.phone, data.email);
    }

}


