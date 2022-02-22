import CheckInput from "../CheckInput";
import RadioInput from "../RadioInput/RadioInput";
import TextInput from "../TextInput";

const Conditional = ({data}) => {
    if(!data){
        return null;
    }
    
    const result = [] ;
    if(data?.length){
        data.map(input=>{
            switch(input?.type){
                case "text":
                    result.push(<TextInput data={input.data} />);
                    break;
                case "radio":
                    result.push(<RadioInput data={input.data} />);
                    break;
                case "checkBox":
                    result.push(<CheckInput data={input.data} />);
                    break;
            }
        })
    }
    

    return(
        result
    )
};

export default Conditional;