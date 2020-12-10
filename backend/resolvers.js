const Contact = require('./mongoSchema')

const resolvers = {
    Query: {
      contacts: async function () {
          return await Contact.find({})
      }
    },
    Mutation: {
        addContact: async function (parent, args) {
            const newContact = await Contact.findOne({firstName: args.Input.name})
            if(newContact) throw new Error("User has already exist")

            const contact = new Contact({
                firstName:args.Input.firstName,
                lastName:args.Input.lastName,
                age:args.Input.age,
                avatar:args.Input.avatar,
                email:args.Input.email
              })
              try{
                const currentContact = await contact.save()
                return currentContact
              } catch(err){
                throw err
              }
        },
        deleteContact: async function (parent, args) {
          return await Contact.deleteOne({firstName: args.firstName})
        }
        
    }
  };

module.exports = resolvers