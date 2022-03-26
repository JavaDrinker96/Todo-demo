import './create.css'

const CreateButton = (props) => {
    return(
        <div className={"create_wrapper"}>
            <div className={"clickable"} onClick={()=>{props.showDialog()}}>
                <svg className={"plus"} width="36" height="36" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="5.5" stroke="#3D82EB"/>
                    <rect x="5.60001" y="3.2" width="0.8" height="5.6" rx="0.4" fill="#3D82EB"/>
                    <rect x="3.19998" y="6.39999" width="0.8" height="5.6" rx="0.4" transform="rotate(-90 3.19998 6.39999)" fill="#3D82EB"/>
                </svg>
                <p className={"create_text"}>
                    Create New Item
                </p>
            </div>
        </div>
    );
};

export default CreateButton;