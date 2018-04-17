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

export default class TambahATCS extends Component{

    state = {
        checkedName: "",
        checkedName2: "",
        selectedName: "",
        items: [{
            id: 1,
            name: "Fashion Wanita",
            condition: false
        },
        {
            id: 2,
            name: "Fashion Pria",
            condition: false
        },
        {
            id: 3,
            name: "Fashion Muslim",
            condition: false
        },
        {
            id: 4,
            name: "Fashion Anak",
            
        },
        {
            id: 5,
            name: "Handphone dan Tablet",
            
        },
        {
            id: 6,
            name: "Elektronik",
            
        },
        {
            id: 7,
            name: "Kecantikan",
            
        },
        {
            id: 8,
            name: "Kesehatan",
            
        },
        {
            id: 9,
            name: "Ibu dan bayi",
            
        },
        {
            id: 10,
            name: "Perawatan tubuh",
            
        },
        {
            id: 11,
            name: "Rumah Tangga",
            
        },
        {
            id: 12,
            name: "Gaming",
            
        },
        {
            id: 13,
            name: "Laptop dan Aksesoris",
            
        },
        {
            id: 14,
            name: "Komputer dan Aksesoris",
            
        },
        {
            id: 15,
            name: "Kamera",
            
        },
        {
            id: 16,
            name: "Otomotif",
            
        },
        {
            id: 17,
            name: "Olahraga",
            
        },
        {
            id: 18,
            name: "Film dan Musik",
            
        },
        {
            id: 19,
            name: "Dapur",
            
        },
        {
            id: 20,
            name: "Office dan Stationeri",
            
        },
        {
            id: 21,
            name: "Sofenir dan Kado",
            
        },
        {
            id: 22,
            name: "Mainan dan Hobi",
            
        },
        {
            id: 23,
            name: "Makanan dan Minuman",
            
        },
        {
            id: 24,
            name: "Buku",
            
        },
        {
            id: 25,
            name: "Software",
            
        },
        {
            id: 26,
            name: "Produk Lainya",
            
        },
        ],

        items2: [{
            id: 1,
            name: "JNE"
        },
        {
            id: 2,
            name: "TIKI"
        },
        {
            id: 3,
            name: "WAHANA"
        },
        {
            id: 4,
            name: "GO-JEK"
        },
        {
            id: 5,
            name: "POS Indonesia"
        },
        {
            id: 6,
            name: "First"
        },
        {
            id: 7,
            name: "SiCepat"
        },
        {
            id: 8,
            name: "J&T"
        }
        ],

        items3: [{
            id: 1,
            name: "Selalu Tersedia"
        },
        {
            id: 2,
            name: "Stock Terbatas"
        },
        {
            id: 3,
            name: "Stock Kosong"
        }],
        selected1: "key0"
    }

    onValueChange(value) {
        this.setState({
          selected1: value
        });
      }

    checkCheck(name){
        this.setState({
            checkedName: name
        })

        if(this.state.checkedName == name)
        {
            this.setState({
                checkedName: ""
            })
        }
        
    }

    checkCheck2(name){
        this.setState({
            checkedName2: name,
            condition: true
        })

        if(this.state.checkedName2 == name)
        {
            if(this.state.condition == true)
            {
                this.setState({
                    checkedName2: ""
                })
            }
        }
        
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

    render(){
        return(
            <Container>
                <Header>
                    <Body>
                        <Title>
                            Tambah Lapak
                        </Title>
                    </Body>
                </Header>
                <Content padder>
                <Form>
                    <Picker
                        iosHeader="Select one"
                        mode="dropdown"
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}
                        style={{marginLeft: 7, marginBottom: 10}}
                        >
                        <Picker.Item label="Asisten Lapangan Terdekat" value="key0" />
                        <Picker.Item label="Algojo" value="key1" />
                        <Picker.Item label="Sumanto" value="key2" />
                        <Picker.Item label="Diwan" value="key3" />
                        <Picker.Item label="Supri" value="key4" />
                    </Picker>
                    <Item stackedLabel last>
                        <Label>Nama Toko</Label>
                        <Input />
                    </Item>
                    <Item stackedLabel last>
                        <Label>Slogan</Label>
                        <Input />
                    </Item>

                    <Item stackedLabel last>
                        <Label>Logo Toko</Label>
                        <Button transparent onPress={()=> {alert("Coming Soon")}}>
                            <Text style={styles.fileChooser}>TAMBAHKAN FILE</Text>
                        </Button>
                    </Item>

                    <Item stackedLabel last>
                        <Label>Deskripsi</Label>
                        <Textarea />
                    </Item>

                    <Item stackedLabel last>
                        <Label>Alamat Lengkap</Label>
                        <Textarea />
                    </Item>

                    <Item stackedLabel last>
                        <Label>Kota</Label>
                        <Input />
                    </Item>

                    <Item stackedLabel last>
                        <Label>Kode Pos</Label>
                        <Input />
                    </Item>

                    <Item stackedLabel last>
                        <Label>Situs Web</Label>
                        <Input />
                    </Item>

                    <Item stackedLabel last>
                        <Label>No Telp</Label>
                        <Input />
                    </Item>

                    <Item stackedLabel last>
                        <Label>Alamat Email</Label>
                        <Input />
                    </Item>

                    <Item stackedLabel last>
                        <Label>Nama Bank dan No Rek</Label>
                        <Input />
                    </Item>

                    <Label style={styles.label}>Jenis barang (Kategori)</Label>

                    {this.state.items.map((item, index)=> {
                        return (
                            <ListItem key={item.name}>
                                <CheckBox checked = {item.name ==  this.state.checkedName  ? true : false} onPress={()=> this.checkCheck(item.name)}/>
                                <Body>
                                <Text>{item.name}</Text>
                                </Body>
                            </ListItem>
                        )
                    })}
                    
                    <Label style={styles.label}>Status Produk (Kategori)</Label>
                    
                    {this.state.items3.map((item, index)=> {
                        return(
                            <ListItem key={item.name}>
                                <Radio selected = {item.name == this.state.selectedName ? true : false} onPress={()=> this.checkRadio(item.name)} />
                                <Body>
                                <Text>{item.name}</Text>
                                </Body>
                            </ListItem>
                        )
                    } )}
                    
                    <Label style={styles.label}>Jasa Pengiriman</Label>

                    {this.state.items2.map((item, index)=> {
                        return (
                            <ListItem key={item.name}>
                                <CheckBox checked = {item.name ==  this.state.checkedName2  ? true : false} onPress={()=> this.checkCheck2(item.name)}/>
                                <Body>
                                <Text>{item.name}</Text>
                                </Body>
                            </ListItem>
                        )
                    })}

                    <ListItem>
                        <Button style={styles.buttone}>
                            <Text style={styles.labelBtn}>Submit</Text>
                        </Button>
                    </ListItem>
                </Form>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button>
                            <Icon name="home" />
                        </Button>
                        <Button>
                            <Icon name="cart" />
                        </Button>
                        <Button active>
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