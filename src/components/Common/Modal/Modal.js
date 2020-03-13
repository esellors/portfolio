import React from 'react';

const Modal = ({item, activator, index, displayType}) => {
    const [display, setDisplay] = React.useState('none');

    React.useEffect(() => {
        if (display === 'block' || display === 'flex') {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [display])

    return (
        <>
            {
                activator
                    ?   <img 
                            key={index || 'null'}
                            onClick={() => setDisplay(displayType)}
                            className='modal_activator_img'
                            src={activator} 
                            alt='Open' 
                        />
                    :   null
            }
            <div 
                className='modal'
                style={{display}}
                onClick={() => setDisplay('none')}
            >
                {
                    item || <img 
                        className='modal_project_imgs'
                        key={index + 1000}
                        onClick={() => setDisplay('none')}
                        src={activator} 
                        alt='Project screencap' 
                    />
                }
            </div>
        </>
    );
}

export default Modal;