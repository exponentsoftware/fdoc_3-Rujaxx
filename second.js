const users = [
    {
            _id: 'ab12ex',
            username: 'Alex',
            email: 'alex@alex.com',
            password: '123123',
            createdAt:'17/05/2019 9:00 AM',
            isLoggedIn: false
    },
    {
            _id: 'fg12cy',
            username: 'Asab',
            email: 'asab@asab.com',
            password: '123456',
            createdAt:'17/05/2019 9:30 AM',
            isLoggedIn: true
    },
    {
            _id: 'zwf8md',
            username: 'Brook',
            email: 'brook@brook.com',
            password: '123111',
            createdAt:'17/05/2019 9:45 AM',
            isLoggedIn: true
    },
    {
            _id: 'eefamr',
            username: 'Martha',
            email: 'martha@martha.com',
            password: '123222',
            createdAt:'17/05/2019 9:50 AM',
            isLoggedIn: false
    },
    {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'17/05/2019 10:00 AM',
            isLoggedIn: false
    }
    ];

    const products = [
{
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
},
{
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
},
{
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
}
];


const signUp =(user)=>{
	let User =  users.find(User => User.email === user.email);
	if(!User && user.password.length>=6){
		users.push(user);
        console.log('user added')
	}else {
      console.log('user already exists or add a valid password')
	}
}

var user = {email:"thomas@thos.com",password:"daad"};
signUp(user)
console.log(users)

const signIn =(user)=>{
	let User =  users.find(User => User.email === user.email);
    let checkPassword = users.find(User => User.password === user.password);
	if(User && checkPassword){
		User.isLoggedIn=true;
        console.log('user logged in')
	}else {
      console.log('user not found or checkPassword')
	}
}

var user = {email:"thomas@thomas.com",password:"1333"};
signIn(user)
console.log(users)

const signIn =(user)=>{
	let User =  users.find(User => User.email === user.email);
    let checkPassword = users.find(User => User.password === user.password);
	if(User && checkPassword){
		User.isLoggedIn=true;
        console.log('user logged in')
	}else {
      console.log('user not found or checkPassword')
	}
}

var user = {email:"thomas@thomas.com",password:"1333"};
signIn(user)
console.log(users)


const rateProduct =(user,product,rating)=>{
	let User =  users.find(User => User._id === user._id);
    let Product = products.find(Product => Product._id === product._id)
    console.log(Product)
	if(Product && User.isLoggedIn ){
		Product.ratings.push({userId:user._id,rate:rating});
        console.log('rating added')
	}else {
      console.log('user not logged in')
	}
}

var user = {_id: 'ab12ex',};
var product = {_id: 'hedfcg',}
var rating = 5
rateProduct(user,product,rating)
console.log(products)

const averageRating =(product)=>{
    let Product = products.find(Product => Product._id === product._id)
    let count = 0;
    let sum = 0;
    Product.ratings.forEach((element) => { 
    sum += element.rate
    count++
    })
    let numOfRatings = Product.ratings.length
    let avgRating = sum/count
	if(Product){
		Product.avgRating=avgRating;
        console.log('rating added')
	}else {
      console.log('user not logged in')
	}
}
var product = {_id: 'eedfcf',}
averageRating(product)
console.log(products)
