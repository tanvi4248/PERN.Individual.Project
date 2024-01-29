//Make some arrays of objects based on the schema I created


//tours
const tours = [
    {
      title: 'spain', 
      description: 'Spain a country on Europes Iberian Peninsula includes 17 autonomous regions with diverse geography and cultures.', 
      googlemap: 'https://maps.app.goo.gl/5HD41R7QtcwX6czR7',
      price: 3200, 
      imgurl:'https://cdn.pixabay.com/photo/2015/11/18/16/03/valencia-1049389_640.jpg',
      IsReserve: 'false'
    },
    {
      title: 'Tokyo', 
      description: 'Tokyo Japan busy capital mixes the ultramodern and the traditional from neon-lit skyscrapers to historic temples.', 
      googlemap: 'https://maps.app.goo.gl/iMWYzJJnQqeRuKsy8', 
      price: 2400, 
      imgurl:'https://media.istockphoto.com/id/1387616822/photo/tokyo-skyline-with-mt-fuji.jpg?s=1024x1024&w=is&k=20&c=rMq50p7TINbylUVa8XppMZrZZT59sjCoNyd2jjf4g0M=',
      IsReserve: 'false'
    },
    {
      title: 'Zurich', 
      description: 'The city of Zurich a global center for banking and finance lies at the north end of Lake Zurich in northern Switzerland.', 
      googlemap: 'https://maps.app.goo.gl/PMRkNLzEd2ALnUHM9', 
      price: 4000, 
      imgurl:'https://media.istockphoto.com/id/523202645/photo/zurich-cityscape-switzerland.jpg?s=1024x1024&w=is&k=20&c=YuW7lqghQQUrKDOoYK2_UnrXtbO-LiIqsnB-rH6mwOE=',
      IsReserve: 'false'
    },
    {
      title: 'Switzerland', 
      description: 'The city of Zurich a global center for banking and finance lies at the north end of Lake Zurich in northern Switzerland.', 
      googlemap: 'https://maps.app.goo.gl/Q6BdGDHf1s2LGixN9', 
      price: 2500, 
      imgurl:'https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt68eef1f3da44d0da/6512c75dec04d20f692b9ae4/Europe_Switzerland_Lauterbrunnen-village_valley_719299507-ss.jpg',
      IsReserve: 'false'
    },
    {
      title: 'phuket', 
      description: 'Phuket, a rainforested, mountainous island in the Andaman Sea, has some of Thailand’s most popular beaches, mainly situated along the clear waters of the western shore.', 
      googlemap: 'https://maps.app.goo.gl/nopyTT1Ju7DE5m3G7', 
      price: 5000, 
      imgurl:'https://www.letsphuket.com/wp-content/uploads/phuket1.jpg',
      IsReserve: 'false'
    },
    {
      title: 'Iceland', 
      description: 'Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks.', 
      googlemap: 'https://maps.app.goo.gl/GN5LFguhsWdSF4wz9', 
      price: 2200, 
      imgurl:'https://cdn.britannica.com/06/171306-050-C88DD752/Aurora-borealis-peninsula-Snaefellsnes-Iceland-March-2013.jpg',
      IsReserve: 'false'
    }
  ]
  
  
  //guest
  
  const guests = [
    {firstname:'lisa',lastname:'hennah',email:'abc@gmail.com',password:'obuprufi'},
    {firstname:'andy',lastname:'cal',email:'xyz@gmail.com',password:'tynal'},
    {firstname:'tris',lastname:'kale',email:'abc12@gmail.com',password:'theralu'}
  ]
  
  const reservations = [
    {guest_id:'1',tour_id:'1'},
    {guest_id:'2',tour_id:'2'},
    {guest_id:'3',tour_id:'2'}
  ]

  module.exports = {tours,guests,reservations}