import React, { Component } from 'react';
import {
    Content,
    Text,
    Header,
    Container,
    Form,
    Item,
    Input,
    Textarea,
    Label,
    Button,
    Footer,
    Body,
    Title,
    ListItem, 
    CheckBox,
    Radio,
    Right,
    Left,
    Picker,
    FooterTab,
    Icon,
    List
} from 'native-base'
import { StyleSheet, View, TouchableOpacity } from 'react-native';

export default class AsistenLapak extends Component{

    state = {
        selectedName: "",
        selectedName2: "",

        items: [{
            id: 1,
            name: "JNE-Reguler"
        },
        {
            id: 2,
            name: "JNE-Yes"
        },
        {
            id: 3,
            name: "JNE-Oke"
        },
        {
            id: 4,
            name: "JTE"
        },
        {
            id: 5,
            name: "Gojek"
        },
        {
            id: 6,
            name: "Others"
        }
        ],
        items2: [{
            id: 1,
            name: "Electronic"
        },
        {
            id: 2,
            name: "Non Electronic"
        },
        {
            id: 3,
            name: "Other"
        }
        ]
    }

    checkRadio(name){
        this.setState({
            selectedName: name
        })

        if(this.state.selectedName == name)
        {
            this.setState({
                selectedName: ""
            })
        }
    }

    checkRadio2(name){
        this.setState({
            selectedName2: name
        })

        if(this.state.selectedName2 == name)
        {
            this.setState({
                selectedName2: ""
            })
        }
    }

    render(){
        return(
            <Container>
                <Header>
                    <Body>
                        <Title>
                            Buat Transaksi
                        </Title>
                    </Body>
                </Header>
                <Content padder>
                <Form>
                    <Label>Produk Pesanan</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label>Stock Availability</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label>Special Request</Label>
                    <Item regular>
                        <Input />
                    </Item>
                    
                    <Label>Order Number</Label>
                    <Item regular>
                        <Input />
                    </Item>
                    
                    <Label style={styles.label}>Type of Shipping</Label>
                    
                    {this.state.items.map((item, index)=> {
                        return(
                            <ListItem key={item.name}>
                                <Radio selected = {item.name == this.state.selectedName ? true : false} onPress={()=> this.checkRadio(item.name)} />
                                <Body>
                                <Text>{item.name}</Text>
                                </Body>
                            </ListItem>
                        )
                    } )}

                    <Label style={styles.label}>Type of Packing</Label>
                    
                    {this.state.items2.map((item, index)=> {
                        return(
                            <ListItem key={item.name}>
                                <Radio selected = {item.name == this.state.selectedName2 ? true : false} onPress={()=> this.checkRadio2(item.name)} />
                                <Body>
                                <Text>{item.name}</Text>
                                </Body>
                            </ListItem>
                        )
                    } )}

                    <Label>Name of Customer</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label>Customer Phone Number</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label>Customer Address</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label>Nearest Courier Location</Label>
                    <Item regular>
                        <Input />
                    </Item>
                    
                    <ListItem>
                        <Button style={styles.buttone}>
                            <Text style={styles.labelBtn}>Kirim</Text>
                        </Button>
                    </ListItem>
                </Form>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button active>
                            <Icon name="home" />
                        </Button>
                        <Button>
                            <Icon name="cart" />
                        </Button>
                        <Button>
                            <Icon name="settings" />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    buttone:{
        width: '70%',
        height: 40,
        marginLeft: 43,
    },

    labelBtn:{
        marginLeft: 55
    },

    label:{
        margin: 20
    },

    fileChooser:{
        color: '#156af2',
        marginLeft: -17
    }
})