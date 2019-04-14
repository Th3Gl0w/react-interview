import React from 'react'
import { Button, Icon, Label, Card, Image} from 'semantic-ui-react'
import './App.css'
class CardDisplay extends React.Component {
    state={
        ratioLike: '',
        ratioDislike: '',
        addLikes : this.props.likes,
        addDislikes : this.props.dislikes
    }
    addLike = () => {
        this.setState({
            addLikes : this.state.addLikes + 1
        })
        this.ratioBar()
    }
    addDislike = () => {
        this.setState({
            addDislikes : this.state.addDislikes + 1
        })
        this.ratioBar()
    }
    ratioBar = () =>{
        const total = this.state.addLikes+this.state.addDislikes
        this.setState({
        ratioLike : (this.state.addLikes/total)*100,
        ratioDislike : (this.state.addDislikes/total)*100
        })
    }
    componentDidMount() {
        this.ratioBar()
    }
   
    
    render(){
        
        return(
           
           
            <div className="cardContent">
            <div className="bg"></div>
            <Card>
                <Image src={this.props.urlimg} />
                <Card.Content>
                <Card.Header>{this.props.title}</Card.Header>
                <Card.Meta>
                    <span className='date'> People like it at : {Math.floor(this.state.ratioLike)}%</span>
                </Card.Meta>
                <Card.Description>Category : {this.props.category}.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                
                <div className="bar">
                    <div  style={{height: '8px', backgroundColor: '#0c0', float: 'left', width : `${this.state.ratioLike}%`}}></div>
                    <div  style={{height: '8px', backgroundColor: 'red', float: 'right', width : `${this.state.ratioDislike}%`}}></div>
                </div>
                
                </Card.Content>
                <Card.Content extra>
                
                
                <Button as='div' labelPosition='right'>
                <Button color='red' onClick={this.addLike}>
                    <Icon name='thumbs up' />
                
                </Button>
                <Label as='a' basic color='red' pointing='left'>
                   {this.state.addLikes}
                </Label>
            </Button>
            <Button as='div' labelPosition='right'>
                <Button color='black' onClick={this.addDislike}>
                    <Icon name='thumbs down' />
                    
                </Button>
                <Label as='a' basic color='black' pointing='left'>
                   {this.state.addDislikes}
                </Label>
            </Button>               

                <Icon name='trash' onClick={() => this.props.deleteFunc(this.props.id)} />
            
             </Card.Content>
            </Card>
           
            </div>
        );
    }
}
export default CardDisplay