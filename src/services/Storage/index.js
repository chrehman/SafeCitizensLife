import storage from '@react-native-firebase/storage';

export  const submitImage = async (image,setUploading,setTransferred,setImage,handleChange) => {
        // const uploadUri= image
        console.log("sdad")
        let filename = image.substring(image.lastIndexOf('/') + 1)
        const extension = filename.split('.').pop()
        const name = filename.split('.').slice(0, -1).join('.')
        filename = `${name}${Date.now()}.${extension}`
        setUploading(true)
        console.log("HELLLOOOO")
        setTransferred(0)
        const task = storage().ref(filename).putFile(image)
        task.on('state_changed', taskSnapshot => {
            console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
            setTransferred(Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes * 100))
        });
        try {
            await task
            const url = await storage().ref(filename).getDownloadURL();
            console.log("Downloading url", url)
            handleChange('urlImg')(url)
            setUploading(false)
        }
        catch (e) {
            console.log(e)
        }
        setImage(null)
    }
