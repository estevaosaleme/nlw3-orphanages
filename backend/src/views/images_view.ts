import Image from '../models/Image';
import 'dotenv';

export default {
    render(image : Image){
        return{
            id: image.id,
            url: `${process.env.URL_HOST}uploads/${image.path}`
        };
    },

    renderMany(images : Image[]){
        return images.map( image => this.render(image));
    }
}