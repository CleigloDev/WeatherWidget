import './Loader.scss';

export default function Loader() {

    const render = () => {

        return (
            <div className='loader-position'>
                <div className='loader'/>
                <p>
                    Loading...
                </p>
            </div>
        );
    }

  return render();
};