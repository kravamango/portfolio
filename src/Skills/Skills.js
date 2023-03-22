import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../Common/Styles/Container.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={styleContainer.container}>
                <h2 className={styleContainer.title}>Skills</h2>
                <div className={style.skills}>

                    <div className={style.progress}>
                        <h3>JS</h3>
                        <span className={style.progressbar}>
                            <div className={style.processJSColor}>0</div>
                        </span>
                    </div>
                    <div className={style.progress}>
                        <h3>HTML</h3>
                        <span className={style.progressbar} >
                            <div className={style.processHTMLColor}>0</div>
                        </span>
                    </div>
                    <div className={style.progress}>
                        <h3>CSS</h3>
                        <span className={style.progressbar}>
                            <div className={style.processCSSColor}>0</div>
                        </span>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Skills ;






/*<Skill title={'js'} discription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim porta imperdiet. In hac habitasse platea dictumst. uismod. Pellentesque egestas maximus purus in lacinia. Cras aliquam felis ac urna faucibus molestie. Vestibulum diam lacus, convallis sit amet auctor vel, venenatis placerat dolor. Nullam molestie felis augue. In luctus, sapien id fermentum efficitur, sapien nunc accumsan turpis, a bibendum metus est eu nisl. Nullam ligula nulla, lobortis quis elit vel, scelerisque pellentesque augue. Suspendisse potenti. Maecenas interdum, lorem nec interdum finibus, nunc felis malesuada justo, sit amet finibus tellus odio vel odio. Maecenas in molestie tellus, placerat ullamcorper elit. Duis pretium orci quis viverra feugiat.'}/>
<Skill title={'css'} discription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim porta imperdiet. In hac habitasse platea dictumst. Nulla imperdiet laoreet justo, eu pharetra sapien placerat id. Sed at est vitae tellus dapibus pellentesque. Nullam facilisis felis sit amet vulputate euismod. Pellentesque egestas maximus purus in lacinia. Cras aliquam felis ac urna faucibus molestie. Vestibulum diam lacus, convallis sit amet auctor vel, venenatis placerat dolor. Nullam molestie felis augue. In luctus, sapien id fermentum efficitur, sapien nunc accumsan turpis, a bibendum metus est eu nisl. Nullam ligula nulla, lobortis quis elit vel, scelerisque pellentesque augue. Suspendisse potenti. Maecenas interdum, lorem nec interdum finibus, nunc felis malesuada justo, sit amet finibus tellus odio vel odio. Maecenas in molestie tellus, placerat ullamcorper elit. Duis pretium orci quis viverra feugiat.'}/>
<Skill title={'re'} discription={"loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim porta imperdiet. In hac habitasse platea dictumst. Nulla imperdiet laoreet justo, eu pharetra sapien placerat id. Sed at est vitae tellus dapibus pellentesque. Nullam facilisis felis sit amet vulputate euismod. Pellentesque egestas maximus purus in lacinia. Cras aliquam felis ac urna faucibus molestie. Vestibulum diam lacus, convallis sit amet auctor vel, venenatis placerat dolor. Nullam molestie felis augue. In luctus, sapien id fermentum efficitur, sapien nunc accumsan turpis, a bibendum metus est eu nisl. Nullam ligula nulla, lobortis quis elit vel, scelerisque pellentesque augue. Suspendisse potenti. Maecenas interdum, lorem nec interdum finibus, nunc felis malesuada justo, sit amet finibus tellus odio vel odio. Maecenas in molestie tellus, placerat ullamcorper elit. Duis pretium orci quis viverra feugiatLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim porta imperdiet. In hac habitasse platea dictumst. Nulla imperdiet laoreet justo, eu pharetra sapien placerat id. Sed at est vitae tellus dapibus pellentesque. Nullam facilisis felis sit amet vulputate euismod. Pellentesque egestas maximus purus in lacinia. Cras aliquam felis ac urna faucibus molestie. Vestibulum diam lacus, convallis sit amet auctor vel, venenatis placerat dolor. Nullam molestie felis augue. In luctus, sapien id fermentum efficitur, sapien nunc accumsan turpis, a bibendum metus est eu nisl. Nullam ligula nulla, lobortis quis elit vel, scelerisque pellentesque augue. Suspendisse potenti. Maecenas interdum, lorem nec interdum finibus, nunc felis malesuada justo, sit amet finibus tellus odio vel odio. Maecenas in molestie tellus, placerat ullamcorper elit. Duis pretium orci quis viverra feugiat"}/>
 */