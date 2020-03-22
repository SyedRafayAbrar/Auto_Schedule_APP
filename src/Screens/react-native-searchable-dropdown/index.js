import React, { Component } from 'react';
import {
  Text,
  FlatList,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image
} from 'react-native';
import { HP, WP, cross, fonts, RF } from '../../utils/constants';
const defaultItemValue = {
  name: '', id: 0
};

export default class SearchableDropDown extends Component {
  constructor(props) {
    super(props);
    this.renderTextInput = this.renderTextInput.bind(this);
    this.renderFlatList = this.renderFlatList.bind(this);
    this.searchedItems = this.searchedItems.bind(this);
    this.renderItems = this.renderItems.bind(this);

    this.state = {
      item: {},
      listItems: [],
      focus: false
    };
  }

  renderFlatList = () => {
    if (this.state.focus) {
      const flatListPorps = { ...this.props.listProps };
      const oldSupport = [
        { key: 'keyboardShouldPersistTaps', val: 'always' },
        { key: 'nestedScrollEnabled', val: false },
        { key: 'style', val: { ...this.props.itemsContainerStyle } },
        { key: 'data', val: this.state.listItems },
        { key: 'keyExtractor', val: (item, index) => index.toString() },
        { key: 'renderItem', val: ({ item, index }) => this.renderItems(item, index) },
      ];
      oldSupport.forEach((kv) => {
        if (!Object.keys(flatListPorps).includes(kv.key)) {
          flatListPorps[kv.key] = kv.val;
        } else {
          if (kv.key === 'style') {
            flatListPorps['style'] = kv.val;
          }
        }
      });
      return (
        <FlatList
          {...flatListPorps}
        />
      );
    }
  };

  componentDidMount = () => {
    const listItems = this.props.items;
    const defaultIndex = this.props.defaultIndex;
    if (defaultIndex && listItems.length > defaultIndex) {
      this.setState({
        listItems,
        item: listItems[defaultIndex]
      });
    } else {
      this.setState({ listItems });
    }
  };

  searchedItems = searchedText => {
    let setSort = this.props.setSort;
    if (!setSort && typeof setSort !== 'function') {
      setSort = (item, searchedText) => {
        return item.name.toLowerCase().indexOf(searchedText.toLowerCase()) > -1
      };
    }
    var ac = this.props.items.filter((item) => {
      return setSort(item, searchedText);
    });
    let item = {
      id: -1,
      name: searchedText
    };
    this.setState({ listItems: ac, item: item });
    const onTextChange = this.props.onTextChange || this.props.textInputProps.onTextChange || this.props.onChangeText || this.props.textInputProps.onChangeText;
    if (onTextChange && typeof onTextChange === 'function') {
      setTimeout(() => {
        onTextChange(searchedText);
      }, 0);
    }
  };

  renderItems = (item, index) => {
    if (this.props.multi && this.props.selectedItems && this.props.selectedItems.length > 0) {
      return (
        this.props.selectedItems.find(sitem => sitem.id === item.id)
          ?
          <TouchableOpacity style={{ ...this.props.itemStyle, flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 0.9, flexDirection: 'row', alignItems: 'flex-start' }}>
              <Text>{item.name}</Text>
            </View>
            <View style={{ flex: 0.1, flexDirection: 'row', alignItems: 'flex-end' }}>
              <TouchableOpacity onPress={() => setTimeout(() => { this.props.onRemoveItem(item, index) }, 0)} style={{ alignItems: 'center', justifyContent: 'center', width: 25, height: 25, borderRadius: 100, marginLeft: 10 }}>
                <Image source={cross} style={{ width: WP(3), height: WP(3) }} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          :
          <TouchableOpacity
            onPress={() => {
              this.setState({ item: item });
              setTimeout(() => {
                this.props.onItemSelect(item);
              }, 0);
            }}
            style={{ ...this.props.itemStyle, flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity
          style={{ ...this.props.itemStyle }}
          onPress={() => {
            this.setState({ item: item, focus: false });
            Keyboard.dismiss();
            setTimeout(() => {
              this.props.onItemSelect(item);
              if (this.props.resetValue) {
                this.setState({ focus: true, item: defaultItemValue });
                this.input.focus();
              }
            }, 0);
          }}
        >
          {
            this.props.selectedItems && this.props.selectedItems.length > 0 && this.props.selectedItems.find(x => x.id === item.id)
              ?
              <Text style={{ ...this.props.itemTextStyle }}>{item.name}</Text>
              :
              <Text style={{ ...this.props.itemTextStyle }}>{item.name}</Text>
          }
        </TouchableOpacity>
      );
    }
  };

  renderListType = () => {
    return this.renderFlatList();
  };

  renderTextInput = () => {
    const textInputProps = { ...this.props.textInputProps };
    const oldSupport = [
      { key: 'ref', val: e => (this.input = e) },
      { key: 'onTextChange', val: (text) => { this.searchedItems(text) } },
      { key: 'underlineColorAndroid', val: this.props.underlineColorAndroid },
      {
        key: 'onFocus',
        val: () => {
          this.props.onFocus && this.props.onFocus()
          this.setState({
            focus: true,
            item: defaultItemValue,
            listItems: this.props.items
          });
        }
      },
      {
        key: 'onBlur',
        val: () => {
          this.props.onBlur && this.props.onBlur()
          this.setState({ focus: false })
        }
      },
      {
        key: 'value',
        val: this.state.item.name
      },
      {
        key: 'style',
        val: { ...this.props.textInputStyle }
      },
      {
        key: 'placeholderTextColor',
        val: this.props.placeholderTextColor
      },
      {
        key: 'placeholder',
        val: this.props.placeholder
      }
    ];
    oldSupport.forEach((kv) => {
      if (!Object.keys(textInputProps).includes(kv.key)) {
        if (kv.key === 'onTextChange' || kv.key === 'onChangeText') {
          textInputProps['onChangeText'] = kv.val;
        } else {
          textInputProps[kv.key] = kv.val;
        }
      } else {
        if (kv.key === 'onTextChange' || kv.key === 'onChangeText') {
          textInputProps['onChangeText'] = kv.val;
        }
      }
    });
    return (
      <TextInput
        {...textInputProps}
      />
    )
  }

  render = () => {
    return (
      // <TouchableWithoutFeedback onPress={()=>this.setState({focus:false})}>
      <View
        keyboardShouldPersist="always"
        style={{ ...this.props.containerStyle }}
      >
        <View style={{
          flexDirection: 'row', width: WP(82), borderRadius: 8,
          shadowColor: "grey", height: HP(7), backgroundColor: "#f2f2f2",
        }}>
          <View style={{ height: HP(7), width: WP(8), justifyContent: 'center', alignItems: 'flex-end' }}></View>
          {this.renderTextInput()}
        </View>
        {this.renderListType()}
        <View style={{marginTop:HP(2)}}>
          {this.renderSelectedItems()}
        </View>

      </View>
      // </TouchableWithoutFeedback>
    );
  };
  renderSelectedItems() {
    let items = this.props.selectedItems;
    if (items !== undefined && this.props.chip && this.props.multi) {
      return <View style={{ flexDirection: 'row', flexWrap: 'wrap', minHeight: HP(5), maxHeight: "auto", paddingBottom: 10, marginTop: 5 }}>
        {items.map((item, index) => {
          return (
            <View key={index} style={{
              minWidth: WP(23.12),
              maxWidth: 'auto',
              justifyContent: 'center',
              height: 35,
              flex: 0,
              backgroundColor: '#fff',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: 5,
              paddingHorizontal: WP(3.5),
              borderRadius: 8,
              borderWidth: 1.2
            }}>
              <Text style={{ fontFamily: fonts.med, fontSize: RF(14) }}>{item.name}</Text>
              <TouchableOpacity onPress={() => setTimeout(() => { this.props.onRemoveItem(item, index) }, 0)}
                style={{ alignItems: 'space-between', justifyContent: 'center', width: 25, height: 25, borderRadius: 100 }}>
                <Image source={cross} style={{ width: WP(3), height: WP(3) }} />
              </TouchableOpacity>
            </View>
          )
        })
        }
      </View>
    }
  }
}