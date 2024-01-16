//Make some arrays of objects based on the schema I created


//tours
const tours = [
    {title: 'spain', 
    guestsId: '1',
    description: 'Spain a country on Europes Iberian Peninsula includes 17 autonomous regions with diverse geography and cultures.', 
    googlemap: 'https://maps.app.goo.gl/5HD41R7QtcwX6czR7', 
    imgUrl:'https://cdn.pixabay.com/photo/2015/11/18/16/03/valencia-1049389_640.jpg'},
    {title: 'Tokyo', 
    guestsId: '2',
    description: 'Tokyo Japan busy capital mixes the ultramodern and the traditional from neon-lit skyscrapers to historic temples.', 
    googlemap: 'https://maps.app.goo.gl/iMWYzJJnQqeRuKsy8', 
    imgUrl:'https://media.istockphoto.com/id/1387616822/photo/tokyo-skyline-with-mt-fuji.jpg?s=1024x1024&w=is&k=20&c=rMq50p7TINbylUVa8XppMZrZZT59sjCoNyd2jjf4g0M='},
    {title: 'Zurich', 
    description: 'The city of Zurich a global center for banking and finance lies at the north end of Lake Zurich in northern Switzerland.', 
    googlemap: 'https://maps.app.goo.gl/PMRkNLzEd2ALnUHM9', 
    imgUrl:'https://media.istockphoto.com/id/523202645/photo/zurich-cityscape-switzerland.jpg?s=1024x1024&w=is&k=20&c=YuW7lqghQQUrKDOoYK2_UnrXtbO-LiIqsnB-rH6mwOE='}
  ]
  
  
  //guest
  
  const guests = [
    {firstname:'lisa',lastname:'hennah',email:'abc@gmail.com',password:'obuprufi'},
    {firstname:'andy',lastname:'cal',email:'xyz@gmail.com',password:'tynal'},
    {firstname:'tris',lastname:'kale',email:'abc12@gmail.com',password:'theralu'}
  ]
  
  module.exports = {tours,guests}