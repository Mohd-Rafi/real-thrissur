import mongoose from 'mongoose';

mongoose
  .connect(
    'mongodb+srv://erickpjoshy:L6VpTurEfhSETtTn@realthrissur.req3s1n.mongodb.net/?retryWrites=true&w=majority&appName=Realthrissur'
  )
  .then(() => {
    console.log('DB Connected');
  })
  .catch(e => {
    console.log(e);
  });

export default mongoose;
