import React, { use } from 'react';
import SkillCard from '../SkillCard/SkillCard';

const AllSkill = ({skillPromiss}) => {

    const skills=use(skillPromiss)
    // console.log(skills)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 w-8/12 mx-auto mt-8 gap-15' >
           {
            skills.map(skill=><SkillCard skill={skill}></SkillCard>)
           }
        </div>
    );
};

export default AllSkill;