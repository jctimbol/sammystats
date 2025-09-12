import Select from 'react-select';
import { useState } from 'react';

const MajorSelector = ({data}) => {
    
    const majors = [...new Set(data.map(row => row.major))];
    const options = majors.map(major => ({ value: major, label: major }));
    const[selectedOption, setSelectedOption] = useState(null);

    return (
         <div>
            <Select
                options={options}
                onChange={setSelectedOption}
                value={selectedOption}
                isSearchable
                placeholder="search for major"
            />
         </div>
    );
};

export default MajorSelector;