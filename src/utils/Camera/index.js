import ImagePicker from 'react-native-image-crop-picker';


export const openGallery = (setImage,setOpenModel) => {
    ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true
    }).then(image => {
        // console.log(image);
        setImage(image.path);
        setOpenModel(false);
    });
}
export const openCamera = (setImage,setOpenModel) => {
    ImagePicker.openCamera({
        width: 400,
        height: 400,
        cropping: true,
    }).then(image => {
        // console.log(image.path);
        setImage(image.path);
        setOpenModel(false);
    });
}