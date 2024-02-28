const employe = {
  fullname: 'manofwisdom',
  duration:4 +' hour',
  isMarried:false,
  email:'eyongclinton44gmail',
  isHealthy:true
  
}
let filterdkey=[]
Object.keys(employe).forEach(Element =>{
  if (Element !='isMarried' && Element !='email'){
    filterdkey.push(Element)
  }
})
console.log(filterdkey)

let keys = Object.keys(employe)

keys.forEach(elementt=> {
  if (elementt != 'email' && elementt != 'isMarried')
  console.log([elementt])
});
let {fullname, isHealthy, duration}=employe
console.log(employe)

 class animal