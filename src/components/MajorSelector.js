import Select from 'react-select';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const MajorSelector = ({data}) => {
    
    const majors = [...new Set(data.map(row => row.major))];
    const options = majors.map(major => ({ value: major, label: major }));
    const[selectedOption, setSelectedOption] = useState();
    const navigate = useNavigate();
    
    const handleButtonClick = () => {
        navigate(`/data`);
    }

    return (
         <div>
            <Select
                options={options}
                onChange={setSelectedOption}
                value={selectedOption}
                isSearchable
                placeholder="search for major"
            />
            <button onClick={handleButtonClick}>get admission data!</button>
         </div>
    );
};

export default MajorSelector;