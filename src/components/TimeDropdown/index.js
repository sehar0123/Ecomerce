import React from "react"
import { View } from "react-native"
import { FlatList, StyleSheet, TouchableOpacity } from "react-native"
import { Menu, MenuDivider, MenuItem } from "react-native-material-menu"
import Button from "../Button"
import assets from "../../assets"
import { globalStyles, HEIGHT } from "../../styles"
import { heightRef, widthRef } from "../../styles/screenSize"
import Checkbox from "../Checkbox"
import Image from "../Image"
import Text from "../Text"

const ITEM_HEIGHT = 25 * heightRef
const TimeDropdown = ({
  rightTextOnPress,
  rightText,
  label,
  labelSize = 13,
  labelWeight = "normal",
  labelColor,
  value,
  setValue = (val, index) => {},
  onPress,
  items = [],
  showLabelIcon = false,
  style,
  leftIcon,
  children,
  btnStyle,
  arrowColor,
  defaultText,
  multiSelect = false,
  setMulti = data => {},
  disabled = []
}) => {
  const menuRef = React.useRef(null)
  const flatListRef = React.useRef(null)
  const [width, setWidth] = React.useState(0)
  const [AM, setAM] = React.useState(false)
  const [PM, setPM] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [multiData, setMultiData] = React.useState([])
  let marginTop = label !== undefined ? 15 * heightRef : 0

  return (
    <View
      style={[styles.container(), style]}
      onLayout={event => {
        setWidth(event.nativeEvent.layout.width)
      }}
    >
      {label && (
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Text
              paddingVertical={10}
              color={labelColor}
              style={{
                fontWeight: labelWeight,
                paddingHorizontal: 10 * widthRef
              }}
              fontSize={labelSize}
            >
              {label}
            </Text>
            {showLabelIcon && <Image size={18} source={assets.info} />}
          </View>
          <Text
            onPress={rightTextOnPress}
            paddingVertical={10}
            color={"black"}
            style={{
              fontWeight: labelWeight,
              paddingHorizontal: 10 * widthRef
            }}
            fontSize={labelSize}
          >
            {rightText}
          </Text>
        </View>
      )}
      <TouchableOpacity
        style={[styles.btn, btnStyle]}
        onPress={() => {
          menuRef.current.show()
          setOpen(true)
        }}
      >
        <>
          {leftIcon && (
            <Image
              style={styles.image(20 * heightRef, 20 * heightRef)}
              source={leftIcon}
            />
          )}
          <Text
            style={{
              fontSize: 13 * heightRef,
              color: arrowColor || "black"
            }}
            numberOfLines={1}
          >
            {multiSelect
              ? value.join(", ") || "Select"
              : items.reduce((acc, item) => {
                  if (item.value === value) return item.label
                  else return acc
                }, defaultText || "Select")}
            {AM ? " AM" : " PM"}
          </Text>
        </>
        <View
          style={{
            transform: [{ rotate: `${!open ? 0 : 180}deg` }],
            position: "absolute",
            right: 15 * widthRef
          }}
        >
          <Image size={15} source={assets.caret_down} />
        </View>
      </TouchableOpacity>
      <Menu
        ref={menuRef}
        onRequestClose={() => {
          menuRef.current.hide()
          setOpen(false)
        }}
        style={{
          width: 130
        }}
      >
        <View
          style={{
            width: 130,
            flexDirection: "row"
          }}
        >
          <FlatList
          
            data={items}
            ref={flatListRef}
            onLayout={() => {
              let i = items.findIndex(item => item.value === value)
              flatListRef.current.scrollToOffset({
                offset: i * ITEM_HEIGHT,
                animated: true
              })
            }}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <MenuDivider />}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <React.Fragment key={index + "dropDown" + item.label}>
                <MenuItem
                  disabled={disabled.includes(index)}
                  pressColor={globalStyles.Theme.SecondaryColor}
                  textStyle={[
                    {
                      color: disabled.includes(index)
                        ? "white"
                        : value === item.value
                        ? "white"
                        : "black"
                    },
                    multiSelect && {
                      color: "black"
                    }
                  ]}
                  style={[
                    {
                      backgroundColor:
                        value === item.value
                          ? globalStyles.Theme.SecondaryColor
                          : "transparent",
                      maxWidth: width,
                      overflow: "hidden",
                      height: ITEM_HEIGHT,
                      maxHeight: ITEM_HEIGHT
                    },
                    multiSelect && {
                      backgroundColor: multiData.includes(item.value)
                        ? "#F6F6F6"
                        : "transparent"
                    }
                  ]}
                  onPress={() => {
                    setOpen(false)
                    setValue(item.value, index, AM ? "AM" : "PM")
                    if (multiSelect) {
                      let m = [...multiData]
                      if (m.includes(item.value)) {
                        m = m.filter(v => v != item.value)
                      } else {
                        m.push(item.value)
                      }
                      setMulti(m)
                      setMultiData(m)
                      return
                    }
                    menuRef.current.hide()
                  }}
                >
                  {item.label}
                </MenuItem>
                {multiSelect && (
                  <View style={{ position: "absolute", right: 10 }}>
                    <Checkbox
                      containerStyle={{ backgroundColor: "transparent" }}
                      checked={multiData.includes(item.value)}
                      onPress={() => {
                        let m = [...multiData]
                        if (m.includes(item.value)) {
                          m = m.filter(v => v != item.value)
                        } else {
                          m.push(item.value)
                        }
                        setMulti(m)
                        setMultiData(m)
                      }}
                    />
                  </View>
                )}
              </React.Fragment>
            )}
          />
          <View style={{ width: 70, height: 40 }}>
            <Button
              title={"AM"}
              marginVertical={0}
              borderRadius={0}
              height={30}
              backgroundColor={AM ? globalStyles.Theme.Primary : "white"}
              titleColor={AM ? "white" : "black"}
              bold={false}
              fontSize={16}
              onPress={() => {
                setAM(true)
              }}
            ></Button>
            <Button
              title={"PM"}
              marginVertical={0}
              borderRadius={0}
              height={30}
              bold={false}
              fontSize={16}
              backgroundColor={!AM ? globalStyles.Theme.Primary : "white"}
              titleColor={!AM ? "white" : "black"}
              onPress={() => {
                setAM(false)
              }}
            ></Button>
          </View>
        </View>
      </Menu>
    </View>
  )
}

export default React.memo(TimeDropdown)

const styles = StyleSheet.create({
  container: (open, len) => [
    {
      marginBottom: 15 * heightRef,
      justifyContent: "flex-end",
      // height: 56 * heightRef,
      width: "100%"
      // backgroundColor: "red"
    }
  ],
  btn: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "white",
    // backgroundColor: ,
    height: HEIGHT,
    width: "100%",
    borderRadius: 6,
    color: "black",
    borderWidth: 1,
    borderColor: "#D2D2D2",
    paddingHorizontal: 20 * widthRef,
    paddingRight: 40 * widthRef
  },
  image: (height = "100%", width = "100%", contain = true) => ({
    width,
    height,
    resizeMode: contain ? "contain" : "cover"
  })
})
