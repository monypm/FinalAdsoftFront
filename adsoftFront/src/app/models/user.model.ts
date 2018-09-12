export class User {
    constructor(

        public first_name: string,
        public last_name: string,
        
        public birthdate: Date,
        public gender: Number,
        
        public password: string,

        public createdAt: Date,
        public updatedAt: Date,
        //As these are optional parameters, they go at the end
        public phone_number?: string,
        public organizer_alias?: string,
        public profile_pic?: string,
        public id?: string, 
    ) { }
}
