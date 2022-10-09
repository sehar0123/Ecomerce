import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  ImageBackground,
  Dimensions,
  Platform,
} from 'react-native';
import {theme} from 'src/Core/theme';
import {getWidth, getHeight} from 'src/config/functions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import globalStyles from 'src/config/globalStyles';
import {heightRef, widthRef, fontRef} from 'src/config/screenSize';
// import globalStyles from 'src/config/globalStyles';
export default class CursoerSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      model: false,
      sliderIndex: 0,
      seletedIndex: 0,
      seletedImage: '',
      maxSlider: 2,
    };
  }
  setRef = c => {
    this.listRef = c;
  };
  scrollToIndex = (index, animated) => {
    try {
      if (this.state.sliderIndex < 0) {
        index = 0;
        this.listRef && this.listRef.scrollToIndex({index, animated});
      } else if (this.props.Data.length < this.state.sliderIndex) {
        index = this.props.Data.length;
        this.listRef && this.listRef.scrollToIndex({index, animated});
      } else {
        this.listRef && this.listRef.scrollToIndex({index, animated});
      }
    } catch (error) {
      console.log(error);
    }
  };
  goNext = () => {
    try {
      const {sliderIndex, maxSlider} = this.state;
      let nextIndex = sliderIndex + 1;
      this.setState({sliderIndex: nextIndex});
      this.scrollToIndex(nextIndex, true);
    } catch (error) {
      console.log(error);
    }
  };
  goBack = () => {
    try {
      const {sliderIndex, maxSlider} = this.state;
      let nextIndex = sliderIndex - 1;
      this.setState({sliderIndex: nextIndex});
      this.scrollToIndex(nextIndex, true);
    } catch (error) {
      console.log(error);
    }
  };
  componentWillMount() {
    try {
      this.props.autoScrool == true
        ? setInterval(
            function () {
              const {sliderIndex, maxSlider} = this.state;
              let nextIndex = 0;
              if (sliderIndex < maxSlider) {
                nextIndex = sliderIndex + 1;
              }
              this.setState({sliderIndex: nextIndex});
              this.scrollToIndex(nextIndex, true);
            }.bind(this),
            7000,
          )
        : null;
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <View>
        <FlatList
          ref={this.setRef}
          data={this.props.Data}
          scrollEnabled={this.props.SwipeScrool}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={item => item._id}
          renderItem={({item, i, index}) => (
            <View>
              {this.props.ImagePerview == false? (
                <TouchableOpacity
                disabled
                  activeOpacity={0.4}
                  onPress={() => {
                    console.log('Pressed');
                    this.setState({model: true});
                    this.setState({seletedIndex: index});
                    this.setState({
                      seletedImage: item.UrlImage,
                    });
                  }}
                  key={i}
                  style={{
                    // backgroundColor: 'red',
                    height: getHeight(this.props.height),
                    width: getWidth(100),
                    marginTop:10*heightRef,
                  }}>
                  <Image
                  // resizeMode='contain'
                    style={{
                      height: getHeight(this.props.height),
                      width: getWidth(93),
                    
                      borderRadius: 10 * fontRef,
                      alignSelf: 'center',
                      resizeMode: 'cover',
                    }}
                    source={{
                      uri: item?.UrlImage,
                    }}
                  />
                  {this.state.seletedIndex == index ? (
                    <Modal
                      animationType="slide"
                      visible={this.state.model}
                      style={styles.model}
                      onRequestClose={() => this.setState({model: false})}>
                      <ImageBackground
                        style={{
                          flex: 1,
                          justifyContent: 'space-between',
                        }}
                        resizeMode="contain"
                        source={{uri: this.state.seletedImage}}>
                        <TouchableOpacity
                          style={[
                            styles.iconBackground,
                            {marginTop: Platform.OS == 'ios' ? 40 : 0},
                          ]}
                          onPress={() => this.setState({model: false})}>
                          {/* <Text style={{color: '#126A86', fontSize: 25}}>
                            X
                          </Text> */}
                          <MaterialCommunityIcons
                            name="close"
                            size={30}
                            color={'grey'}
                          />
                        </TouchableOpacity>
                        <View
                          style={{
                            height: getHeight(18),
                            justifyContent: 'space-around',
                            padding: 8,
                          }}>
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 18,
                              backgroundColor: 'white',
                              width: '110%',
                              paddingHorizontal: 20,
                              alignSelf: 'center',
                            }}>
                            Detail Perview
                          </Text>
                          <View>
                            <FlatList
                              data={this.props.Data}
                              scrollEnabled={this.props.SwipeScrool}
                              ItemSeparatorComponent={() => (
                                <View style={{padding: 5}}></View>
                              )}
                              horizontal
                              showsHorizontalScrollIndicator={false}
                              renderItem={({item, i}) => (
                                <TouchableOpacity
                                  style={
                                    item.UrlImage == this.state.seletedImage
                                      ? {
                                          borderWidth: 3,
                                          borderRadius: 12,
                                          borderColor: '#24BFF0',
                                        }
                                      : null
                                  }
                                  onPress={() => {
                                    console.log('Image pressed');
                                    this.setState({
                                      seletedImage: item.UrlImage,
                                    });
                                  }}>
                                  <Image
                                    style={{
                                      height: getHeight(10),
                                      width: '90%',
                                      borderRadius: 10,
                                    }}
                                    source={item?.UrlImage}
                                  />
                                </TouchableOpacity>
                              )}
                            />
                          </View>
                        </View>
                      </ImageBackground>
                    </Modal>
                  ) : null}
                </TouchableOpacity>
              ) : (
                <View
                  activeOpacity={0.4}
                  key={i}
                  style={{
                    height: getHeight(this.props.height),
                    width: getWidth(100),
                  }}>
                  <Image
                    style={{
                      height: getHeight(this.props.height),
                      width: getWidth(100),
                    }}
                    source={{uri: item.UrlImage}}
                  />
                </View>
              )}
            </View>
          )}
          onMomentumScrollEnd={event => {
            let sliderIndex = event.nativeEvent.contentOffset.x
              ? event.nativeEvent.contentOffset.x / getWidth(100)
              : 0;
            this.setState({sliderIndex});
          }}
        />
        <View
          style={{
            position: 'absolute',
            alignSelf: 'center',
            justifyContent: 'flex-end',
            // backgroundColor: 'green',
            height: getHeight(2),
            bottom: 0,
          }}>
          <View style={styles.sliderContainer}>
            {this.props.Data.map(
              function (item, index) {
                return (
                  <View key={index} style={styles.sliderBtnContainer}>
                    <View style={styles.sliderBtn}>
                      {this.state.sliderIndex == index ? (
                        <View style={styles.sliderBtnSelected} />
                      ) : null}
                    </View>
                  </View>
                );
              }.bind(this),
            )}
          </View>
        </View>
        {/* <View
          style={{
            position: 'absolute',
            alignSelf: 'center',
            justifyContent: 'center',
            height: getHeight(this.props.height - 5),
            backgroundColor: 'green',
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: getWidth(100),
            }}> */}
        {this.props.ControllBtn != false && this.state.sliderIndex != 0 ? (
          <View
            style={{
              position: 'absolute',
              bottom: '30%',
              left: 0,
              // backgroundColor: 'red',
              height: 160 * heightRef,
              justifyContent: 'center',
              alignItems: 'center',
              width: 40 * heightRef,
              overflow: 'hidden',
              borderTopRightRadius: 600,
              borderBottomRightRadius: 600,
            }}>
            <ImageBackground
              style={{
                height: '100%',
                width: '100%',
                position: 'absolute',
                right: 2.1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              resizeMode="contain"
              source={require('../../../../../assets/Images/home.png')}>
              <TouchableOpacity onPress={() => this.goBack()}>
                <Image
                  source={{
                    uri: this.props.Data[this.state.sliderIndex - 1]?.UrlImage,
                  }}
                  style={{
                    width: 30 * heightRef,
                    height: 30 * heightRef,
                    borderRadius: 300,
                    overflow: 'hidden',
                  }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </ImageBackground>
          </View>
        ) : (
          <View />
        )}
        {this.props.ControllBtn != false &&
        this.state.sliderIndex + 1 <= this.props.Data.length - 1 ? (
          <View
            style={{
              position: 'absolute',
              bottom: '30%',
              right: 0,
              // backgroundColor: 'red',
              height: 160 * heightRef,
              justifyContent: 'center',
              alignItems: 'center',
              width: 40 * heightRef,
              overflow: 'hidden',
              borderTopLeftRadius: 600,
              borderBottomLeftRadius: 600,
            }}>
            <ImageBackground
              style={{
                height: '100%',
                width: '100%',
                position: 'absolute',
                left: 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              resizeMode="contain"
              source={require('../../../../../assets/Images/home.png')}>
              <TouchableOpacity onPress={() => this.goNext()}>
                <Image
                  source={{
                    uri: this.props.Data[this.state.sliderIndex + 1]?.UrlImage,
                  }}
                  style={{
                    width: 30 * heightRef,
                    height: 30 * heightRef,
                    borderRadius: 300,
                    overflow: 'hidden',
                  }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </ImageBackground>
          </View>
        ) : (
          <View />
        )}
      </View>
      //   </View>
      // </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  iconBackground: {
    backgroundColor: 'white',
    paddingHorizontal: 5,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    margin: 8,
    shadowOpacity: 0.2,
  },
  scrollContainer: {
    flex: 1,
  },
  model: {
    flex: 1,
    backgroundColor: 'white',
    margin: 0,
  },
  sliderContainer: {
    flexDirection: 'row',
  },
  sliderBtn: {
    height: 10,
    width: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  sliderBtnSelected: {
    height: 10,
    width: 10,
    borderRadius: 6,
    backgroundColor: globalStyles.Theme.primary,
  },
  sliderBtnContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
});
