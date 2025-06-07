export default function Information ({title, informations}) {
    const listItems = informations.map(object => <li key={object.id}>{object.text}</li>);
    
    return (  
        <div>
            <h4>{title}</h4>
            <ul style={{ padding: 0}}>{listItems}</ul>
        </div>
    );
}