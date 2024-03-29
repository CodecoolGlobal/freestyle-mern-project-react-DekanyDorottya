function Header(props) {
    const setFilteredAnimals = props.setFilteredAnimals;
    const allTheAnimals = props.allTheAnimals;
    const setShowSupported = props.setShowSupported;
    const showSupported = props.showSupported;


    function handleGender(event) {
        console.log(event.target.value);

        const filtCharacters = allTheAnimals.filter((animalObj) =>
            animalObj.gender.includes(event.target.value)
        );
        setFilteredAnimals(filtCharacters);
    }

    function handleShowSupportedAnimals() {
        setShowSupported(true);
    }

    function handleBackFromSupportedAnimals() {
        setShowSupported(false);
    }

    function handleSearchBarChange(e) {
        const filteredAnimlas = allTheAnimals.filter((animalObj) =>
            animalObj.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredAnimals(filteredAnimlas);
    }

    return (
        <div className='sticky'>
            <div className='header'>
                <div>
                    <input
                        type='text'
                        onChange={(e) => handleSearchBarChange(e)}
                    />
                </div>

                <div className='search'>

                    <select
                        id='gender'
                        name='gender'
                        onChange={(event) => handleGender(event)}
                    >
                        <option value=''>Choose a gender...</option>
                        <option value='Female'>Female</option>
                        <option value='Male'>Male</option>
                    </select>
                </div>
                <div className='welcome'>
                    <p>Sponsor an animal!</p>
                </div>

                {showSupported ? (
                    <button
                        className='supportedBtn'
                        onClick={handleBackFromSupportedAnimals}
                    >
                        Back
                    </button>
                ) : (
                    <button
                        className='supportedBtn'
                        onClick={handleShowSupportedAnimals}
                    >
                        <div>Supported animals</div>
                    </button>
                )}
            </div>
        </div>
    );
}

export default Header;
