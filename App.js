import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native";
import {Icon,Button} from "react-native-elements"

var arrayItems= new Array(25).fill('empty');



export default class App extends React.Component{
constructor(props){
  super(props);
  this.state={
    randomNumber:'',
    winMessage:"",
    count:8,
    isWon:0,
    showAllButton:1
  }
}
 componentDidMount(){
  this.randomNumberGenerator(); 
 } 

 pressHandler=itemNumber =>{
      let randomNumber =this.state.randomNumber
      if(itemNumber==randomNumber){
        arrayItems[itemNumber]='lottery'
        this.winGame();
      }
      else
      {
        arrayItems[itemNumber]='selected'
        let count =this.state.count
        count--;
        this.setState({count:count})
        if(count==0)
          {
            this.setState({showAllButton:0})
            this.setState({winMessage:"You Ran Out Of chance"})
          }
          
      }
      this.forceUpdate();
 }
 iconSelector= itemNumber =>{
        if(arrayItems[itemNumber]=='lottery')
          return 'credit'
        else
        if(arrayItems[itemNumber]=='selected')
          return 'emoji-sad'
        else
          return "controller-record"
 }
 iconColorSelector= itemNumber =>{
  if(arrayItems[itemNumber]=='lottery')
   return 'green'
  else
  if(arrayItems[itemNumber]=='selected')
   return 'red'
  else
   return "black"
}

 winGame =()=>{
   this.setState({winMessage:"You Won",isWon:1})
   arrayItems.fill('selected')
   let randomNumber= this.state.randomNumber
   arrayItems[randomNumber]='lottery'
   this.forceUpdate();
 }

 randomNumberGenerator =()=>{
    let randomNumber= Math.floor(Math.random() * 26);
    this.setState({randomNumber})
    this.forceUpdate();
    return randomNumber
 }

 showAll = () =>{
  arrayItems.fill('selected')
  let randomNumber = this.state.randomNumber
  arrayItems[randomNumber]='lottery'
  this.setState({isWon:1})
  this.forceUpdate();
 }
 winOrLooseColor = () =>{
   let message = this.state.winMessage
   if(message == 'You Won')
      return 'green'
   else
   if(message=="You Ran Out Of chance")  
      return 'red'
   else
      return 'black'
 }
  render(){
    return(
      <View style={{flex:1,alignItems:"center",backgroundColor:"#d3cce8"}}>
        <View style={{marginTop:10}}>
          <Text style={{fontSize:40,fontStyle:"italic",fontWeight:"bold"}}>
            Scratch And Win 
          </Text>
        </View>
        <View style={{flexDirection:"column",alignItems:"center",paddingTop:5}}>
          <View style={{flexDirection:"row",}}>
            
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(0) 
                }}
                disabled={this.state.isWon}
                >
                      <Icon  
                          type='entypo'
                          name={this.iconSelector(0)}
                          color={this.iconColorSelector(0)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(1)  
                  
                }}
                disabled={this.state.isWon}
               >
                      <Icon  
                          
                          type='entypo'
                          name={this.iconSelector(1)}
                          color={this.iconColorSelector(1)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(2)  
                  
                }}
                disabled={this.state.isWon}
               >
                      <Icon  
                          
                          type='entypo'
                          name={this.iconSelector(2)}
                          color={this.iconColorSelector(2)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(3)  
                  
                }}
                disabled={this.state.isWon}
               >
                      <Icon  
                          
                          type='entypo'
                          name={this.iconSelector(3)}
                          color={this.iconColorSelector(3)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(4)  
                  
                }}
                disabled={this.state.isWon}
               >
                      <Icon  
                          
                          type='entypo'
                          name={this.iconSelector(4)}
                          color={this.iconColorSelector(4)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
        
          </View>
          <View style={{flexDirection:"row",}}>
            
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(5)  
                  
                }}
                disabled={this.state.isWon}
                >
                      <Icon  
                          type='entypo'
                          name={this.iconSelector(5)}
                          color={this.iconColorSelector(5)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(6)  
                  
                }}
                disabled={this.state.isWon}
               >
                      <Icon  
                          
                          type='entypo'
                          name={this.iconSelector(6)}
                          color={this.iconColorSelector(6)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(7)  
                  
                }}
                disabled={this.state.isWon}
               >
                      <Icon  
                          
                          type='entypo'
                          name={this.iconSelector(7)}
                          color={this.iconColorSelector(7)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(8)  
                  
                }}
                disabled={this.state.isWon}
               >
                      <Icon  
                          
                          type='entypo'
                          name={this.iconSelector(8)}
                          color={this.iconColorSelector(8)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(9)  
                  
                }}
                disabled={this.state.isWon}
               >
                      <Icon  
                          
                          type='entypo'
                          name={this.iconSelector(9)}
                          color={this.iconColorSelector(9)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
        
          </View>
          <View style={{flexDirection:"row",}}>
            
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(10)  
                  
                }}
                disabled={this.state.isWon}
                >
                      <Icon  
                          type='entypo'
                          name={this.iconSelector(10)}
                          color={this.iconColorSelector(10)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(11)  
                  
                }}
                disabled={this.state.isWon}
               >
                      <Icon  
                          
                          type='entypo'
                          name={this.iconSelector(11)}
                          color={this.iconColorSelector(11)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(12)  
                  
                }}
                disabled={this.state.isWon}
               >
                      <Icon  
                          
                          type='entypo'
                          name={this.iconSelector(12)}
                          color={this.iconColorSelector(12)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(13)  
                  
                }}
                disabled={this.state.isWon}
               >
                      <Icon  
                          
                          type='entypo'
                          name={this.iconSelector(13)}
                          color={this.iconColorSelector(13)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(14)  
                  
                }}
                disabled={this.state.isWon}
               >
                      <Icon  
                          
                          type='entypo'
                          name={this.iconSelector(14)}
                          color={this.iconColorSelector(14)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
        
          </View>
          <View style={{flexDirection:"row",}}>
            
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(15)  
                  
                }}
                disabled={this.state.isWon}
                >
                      <Icon  
                          type='entypo'
                          name={this.iconSelector(15)}
                          color={this.iconColorSelector(15)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(16)  
                  
                }}
                disabled={this.state.isWon}
               >
                      <Icon  
                          
                          type='entypo'
                          name={this.iconSelector(16)}
                          color={this.iconColorSelector(16)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(17)  
                  
                }}
                disabled={this.state.isWon}
               >
                      <Icon  
                          
                          type='entypo'
                          name={this.iconSelector(17)}
                          color={this.iconColorSelector(17)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(18)  
                  
                }}
                disabled={this.state.isWon}
               >
                      <Icon  
                          
                          type='entypo'
                          name={this.iconSelector(18)}
                          color={this.iconColorSelector(18)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(19)  
                  
                }}
                disabled={this.state.isWon}
               >
                      <Icon  
                          
                          type='entypo'
                          name={this.iconSelector(19)}
                          color={this.iconColorSelector(19)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
        
          </View>
          <View style={{flexDirection:"row",}}>
            
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(20)  
                  
                }}
                disabled={this.state.isWon}>
                      <Icon  
                          type='entypo'
                          name={this.iconSelector(20)}
                          color={this.iconColorSelector(20)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(21)  
                  
                }}
                disabled={this.state.isWon}
               >
                      <Icon  
                          
                          type='entypo'
                          name={this.iconSelector(21)}
                          color={this.iconColorSelector(21)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(22)  
                  
                }}
                disabled={this.state.isWon}
               >
                      <Icon  
                          
                          type='entypo'
                          name={this.iconSelector(22)}
                          color={this.iconColorSelector(22)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(23)  
                  
                }}
                disabled={this.state.isWon}
               >
                      <Icon  
                          
                          type='entypo'
                          name={this.iconSelector(23)}
                          color={this.iconColorSelector(23)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
            <View style={{padding:10,borderWidth:3}}>
               <TouchableOpacity
                onPress = {() =>{
                  this.pressHandler(24)  
                  
                }}
                disabled={this.state.isWon}
               >
                      <Icon  
                          type='entypo'
                          name={this.iconSelector(24)}
                          color={this.iconColorSelector(24)}
                          size={50}
                        />
               </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flexDirection:"column"}}>
          <Text style={{fontSize:40,fontStyle:"italic",fontWeight:"bold",color:this.winOrLooseColor()}}>
            {this.state.winMessage}
          </Text>
        </View>
        <View style={{paddingTop:20,flexDirection:"row",justifyContent:"space-between"}}>
          <Button
                title="Reset"
                type="outline"
                buttonStyle={{padding:10,backgroundColor:"#6437ed",borderRadius:25,paddingLeft:30,paddingRight:30}}
                titleStyle={{fontSize:30,color:"white",fontStyle:"italic"}}
                onPress={()=>{
                  arrayItems.fill('empty')
                  this.setState({
                    randomNumber:this.randomNumberGenerator() ,
                    winMessage:"",
                    count:8,
                    isWon:0,
                    showAllButton:1
                  })
                  this.winOrLooseColor()
                  this.forceUpdate();
                }}
          />
        </View>
        <View style={{paddingTop:10}}>
                <Button
                      disabled={this.state.showAllButton}
                      title="Show All"
                      type="outline"
                      buttonStyle={{padding:10,backgroundColor:"#6437ed",borderRadius:25,paddingLeft:30,paddingRight:30}}
                      titleStyle={{fontSize:30,color:"white",fontStyle:"italic"}}
                      onPress={()=>{
                        this.showAll()
                      }}
                />
          </View>
          <Text style={{fontSize:40,fontStyle:"italic",fontWeight:"bold",color:this.winOrLooseColor()}}>
                Avialable Chances {this.state.count}
          </Text>
      </View>
    )
  }
}