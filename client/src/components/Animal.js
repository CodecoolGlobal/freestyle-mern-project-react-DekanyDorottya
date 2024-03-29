

import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

export default function Animal({
    animal,
    mySupportedAnimals,
    setMySupportedAnimals,
    setRender,
    showSupported,
    index,
}) {
    function handleSupport(e) {
        e.preventDefault();
        console.log('animal', animal);

        if (
            mySupportedAnimals.some(
                (mySupportedAnimal) =>
                    mySupportedAnimal.details.name === animal.name
            )
        ) {
            console.log('Already added');
        } else {
            const data = { details: animal, donate: 0 };

            fetch('http://localhost:5000/api/animal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
            console.log(data);
        }
    }
    const submit = (event) => {

        confirmAlert({
          title: 'Confirm to submit',
          message: 'Are you sure to do this.',
          buttons: [
            {
              label: 'Yes',
              onClick: (event) => handleDelete(event)
            },
            {
              label: 'No',
              //onClick: () => alert('Click No')
            }
          ]
        });
      }

    function handleDelete(event) {
        //console.log('this needs to be deleted');
        //console.log(event.target.parentElement.className);

        mySupportedAnimals.forEach(async function (supportedAnimal) {
            if (animal.name === supportedAnimal.details.name) {
                console.log(supportedAnimal._id); 

                const data = await fetch(
                    'http://localhost:5000/support/delete/' +
                        supportedAnimal._id,
                    { method: 'DELETE' }
                ).then((res) => res.json());
                setMySupportedAnimals((mySupportedAnimals) =>
                    mySupportedAnimals.filter(
                        (mySupportedAnimal) =>
                            mySupportedAnimal._id !== data.result._id
                    )
                );
            }
        });
        /* 
        mySupportedAnimals.forEach(async function (supportedAnimal) {
            console.log(supportedAnimal.details.name);
            if (
                supportedAnimal.details.name ===
                event.target.parentElement.className
            ) {
                
            }
        }); */
    }

    const dogPhotos = [
        'https://www.ocregister.com/wp-content/uploads/2021/07/OCR-L-ADOPTJIMMY-0711_86145666.jpg?w=963',
        'https://i.pinimg.com/564x/97/1d/f9/971df904c06c3a3b7ce3e7e40534c6c9.jpg',
        'https://i.pinimg.com/originals/77/44/15/774415baeda194311425570520709cac.jpg',
        'https://cdn.greenfieldpuppies.com/wp-content/uploads/2016/07/Portuguese-Water-Dog-Mix.jpg',
        'https://i.pinimg.com/originals/0f/14/fd/0f14fdf768946989c37130fb20999106.jpg',
        'https://i.pinimg.com/474x/57/ae/f0/57aef0710651ee7737af864ed38a897a.jpg',
        'https://i.pinimg.com/564x/b5/34/83/b534839df9631e5ae69e1abc1f669a90.jpg',
        'https://i.pinimg.com/564x/06/0e/6a/060e6a5eab54aa6854ceae1221cc2408.jpg',
        'https://i.pinimg.com/564x/96/d9/18/96d9187e82285abd26500c979d929df0.jpg',
        'https://i.pinimg.com/564x/de/33/0c/de330ccbf624e24af8138e568b7f3ba3.jpg',
        'https://i.pinimg.com/564x/b1/9d/d3/b19dd3e4dc8ca1608d67d3bfbe95e542.jpg',
        'https://i.pinimg.com/564x/89/b4/17/89b41770b3b9b64d0036c27adcd9d1c5.jpg',
        'https://i.pinimg.com/564x/3f/cb/a4/3fcba41dd3b5f15ac066287a3220b37b.jpg',
        'https://i.pinimg.com/564x/f4/6e/8d/f46e8d13607796468f2baecac8cd1ed6.jpg',
        'https://i.pinimg.com/564x/f9/99/2a/f9992aad7d1ab2c2336b457be4a00fa5.jpg',
        'https://i.pinimg.com/564x/8a/ee/d7/8aeed71684e493c27b37bfad8f32204b.jpg',
        'https://i.pinimg.com/564x/b4/06/15/b406156171c45aa713dfffbe77c7994b.jpg',
        'https://media.istockphoto.com/id/1324688523/photo/a-australian-cattle-dog-puppy-full-length-portrait.jpg?s=612x612&w=0&k=20&c=0dN4QD37lvdvYvzWdB_xlDvC3c3LMNpR41iwViFAnN0=',
        'https://i.guim.co.uk/img/media/a4840fd090eca923e37526863e3cc586bebff97d/830_508_5593_3356/master/5593.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=335d45c40fa3f7c7564030ebdfc1c7c1',
        'https://www.thesprucepets.com/thmb/qTKqY8BStGBtyMM34ZRMIQdRfVQ=/750x0/filters:no_upscale():strip_icc()/Daisy-d1308a01583d457990a2f1de5d0962f0.jpg',
    ];

    const notify = (name) => {
        if (
            mySupportedAnimals.some(
                (mySupportedAnimal) =>
                    mySupportedAnimal.details.name === animal.name
            )
        ) {
            toast(`Already added ${name}`, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        } else {
            const data = { details: animal, donate: 0 };
            toast(`You are now supporting ${name}`, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    };

    const deleteNotify =(name)=>{
        toast(`${name} is not in your list now!`, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        })
    }
   

    function generatePhoto() {
        const randomIndex = Math.floor(Math.random() * 20);
        return dogPhotos[randomIndex];
    }

    return (
        <div /* className='card' */>
            <div className={animal.name}>
                <img
                    src={
                        animal.photos.length !== 0
                            ? animal.photos[0].large
                            : //: 'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg'
                              generatePhoto()
                    }
                    alt='dog'
                    width='150'
                />
                { !showSupported && (
                <button className='supportAddButton'
                    onClick={(e) => {
                        handleSupport(e);
                        setRender(true);
                        notify(animal.name);
                    }}
                >
                    <span className='material-symbols-outlined'>
                        heart_plus
                    </span>
                </button>)}
                <div className='animalname'>
                    {animal.name}
                    <br></br>
                    
                </div>
                <div>{animal.gender}</div>
                <div>{animal.contact.email}</div>
                <div>City: {animal.contact.address.city}</div>

                <br></br>

                <ToastContainer />
                {showSupported && (
                    <button className='deleteButton'>
                        <span
                            onClick={(event) => {submit(event);deleteNotify(animal.name)}}
                            className='material-symbols-outlined'
                        >
                            heart_minus
                        </span>

                        {/* Remove */}
                    </button>
                )}
            </div>
        </div>
    );
}
