const userName = process.argv[2]
const age = process.argv[3]

if (!userName || !age){
    console.log("Digite nome e/ou sua idade")
} else {
    const newAge = {
        userName,
        age
    }
    console.log(`"Olá ${userName}! Você tem ${age} anos.Em sete anos você terá ${Number(newAge.age)+7}."`)
}
