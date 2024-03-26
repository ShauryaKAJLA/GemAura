
export const products=[
    {
        id:1,
        name:"Colambia emerald ring",
        desc:"rare emerald fitted in ring by experts",
        metal:{
            type:"White Gold",
            pricePerGram:6500,
            weightInGram:20,
        },
        Gem:{
            type:"emerald",
            weightInCaret:3,
            totalPrice:100000,
        },
        gender:"m",
        type_of:"ring",
        images:[
                    '/src/assets/emerald.png' ,
                   "/src/assets/emerald2.webp",
                    "/src/assets/emerald3.webp",
                    "/src/assets/emerald4.webp"
        ],
        instock:true,
        size:20
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
        gender:"w",
        type_of:"Ring",
              images:[
                    '/src/assets/diamond.webp',
                    "jicsid",
                    "jicsid",
                   "jicsid",
              ],
              instock:true,
              size:20
    },
    {
        id:3,
        name:"Diamond Necklace",
        desc:"rare Diamond fitted in necklace by experts",
        metal:{
            type:"Gold",
            pricePerGram:8000,
            weightInGram:100,
        },
        Gem:{
            type:"diamond",
            weightInCaret:2,
            totalPrice:2000000,
        },
                gender:"k",
                type_of:"necklace",
              images:[
                  '/src/assets/necklace.png',
                    "jicsid",
                    "jicsid",
                    "jicsid",
              ],
              instock:false
    },

]
