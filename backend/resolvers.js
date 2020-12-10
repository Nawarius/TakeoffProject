const Contact = require('./mongoSchema')

const resolvers = {
    Query: {
      contacts: async function (parent, args) {
          if(!args.firstName) return await Contact.find({})
          return await Contact.find({firstName:{$regex: '^' + args.firstName, $options: 'i'}})
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
        changeContact: async function(parent,args){
         
          await Contact.findByIdAndUpdate(args.Input._id,{
              firstName:args.Input.firstName,
              lastName:args.Input.lastName,
              age:args.Input.age,
              avatar:args.Input.avatar,
              email:args.Input.email
          })
          return await Contact.findById(args.Input._id)
        },
        deleteContact: async function (parent, args) {
          return await Contact.deleteOne({firstName: args.firstName})
        }
        
    }
  };

module.exports = resolvers