
export const products=[
    {
        id:1,
        name:"Colambia emereled ring",
        desc:"rare emereled fitted in ring by experts",
        metal:{
            type:"gold",
            pricePerGram:6500,
            weightInGram:20,
        },
        Gem:{
            type:"emereled",
            weightInCaret:3,
            totalPrice:100000,
        },
         type:{
                gender:"m",
                type_of:"ring"
            },
              images:[
                {
                    src:'/src/assets/emereled.jpg' ,
                    main:true  
                },
                {
                    src:"jicsid",
                    main:false
                },
                {
                    src:"jicsid",
                    main:false
                },
                {
                    src:"jicsid",
                    main:false
                },
              ],
              instock:true
    },
    {
        id:2,
        name:"Diamond ring",
        desc:"rare Diamond fitted in ring by experts",
        metal:{
            type:"Platinum",
            pricePerGram:8000,
            weightInGram:10,
        },
        Gem:{
            type:"diamond",
            weightInCaret:2,
            totalPrice:200000,
        },
         type:{
                gender:"F",
                type_of:"Ring"
            },
              images:[
                {
                    src:'/src/assets/diamond.webp',
                    main:true  
                },
                {
                    src:"jicsid",
                    main:false
                },
                {
                    src:"jicsid",
                    main:false
                },
                {
                    src:"jicsid",
                    main:false
                },
              ],
              instock:false
    },

]
