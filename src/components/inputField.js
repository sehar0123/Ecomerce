import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, StyleSheet, TextInput, TextInputProps, Text} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import globalStyles from 'src/config/globalStyles';
import {heightRef, widthRef} from 'src/config/screenSize';
import {useSelector} from 'react-redux';
const InputField = (
  {
    title,
    value,
    onChangeText,
    style,
    message,
    placeholder,
    inner,
    textFieldStyle,
    borderRadius,
    titleColor = globalStyles.Theme.primary,
    titleSize,
    fontWeight = '600',
    borderColor,
    multiline,
    backgroundColor,
    type,
    marginBottom = 15,
    password,
    line,
    emailValidation = true,
    returnKeyType,
    ...rest
  }: TextInputProps,
  ref,
) => {
  const inputRef = React.useRef();
  const state = useSelector(state => state);
  const [showPassword, setShowPassword] = React.useState(true);
  const [showTick, setShowTick] = React.useState(false);
  React.useImperativeHandle(ref, () => ({
    test: 'test',
    title,
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return (
    <View style={[styles.container, style]}>
      {inner === undefined ? (
        <Text
          style={{
            fontSize: titleSize || 11 * heightRef,
            color: state.style.themeColor,
            fontWeight: 'bold',
            marginBottom: marginBottom,
            fontWeight: fontWeight,
          }}>
          {title}
        </Text>
      ) : null}
      <View
        style={[
          styles.textView(inner !== undefined),
          inner !== undefined
            ? {
                borderColor: borderColor || '#D8D8D8',
                borderRadius: borderRadius || 5,
                borderWidth: 0.5,
              }
            : {},
        ]}>
        {inner !== undefined ? (
          <Text
            style={{
              fontSize: 11 * heightRef,
              width: '100%',
            }}>
            {title}
          </Text>
        ) : null}
        <TextInput
          ref={inputRef}
          style={[
            styles.textField(inner !== undefined),
            {
              height:
                multiline !== undefined ? 100 * heightRef : 78 * heightRef,
              textAlignVertical: multiline !== undefined ? 'top' : 'center',
              paddingVertical: multiline !== undefined ? 20 : 0,
            },
            inner !== undefined
              ? {}
              : {
                  borderColor: borderColor || state.style.themeColor,
                  borderRadius: borderRadius || 10,
                  borderWidth: 1.2,
                  backgroundColor: backgroundColor || globalStyles.Theme.white,
                  color: '#848D9F',
                  height: 20,
                },
            textFieldStyle,
          ]}
          {...{
            value,
            onChangeText: Text => {
              onChangeText(Text);
              if (emailValidation == true) {
                if (Text === '') {
                  setShowTick(false);
                } else {
                  (reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
                    reg.test(Text) == true
                      ? setShowTick(true)
                      : setShowTick(false);
                }
              }
            },
            placeholder,
          }}
          enablesReturnKeyAutomatically
          returnKeyType={returnKeyType}
          secureTextEntry={password == true ? showPassword : false}
          numberOfLines={multiline !== undefined ? 5 : 1}
          multiline={multiline || false}
          placeholderTextColor="#848D9F"
          {...rest}
        />
        {line ? (
          <View
            style={{
              height: 1,
              width: '75%',
              backgroundColor: '#E5E5E5',
            }}
          />
        ) : null}
        {password === true ? (
          <TouchableOpacity
            onPress={() => setShowPassword(state => !state)}
            style={{
              position: 'absolute',
              right: 20 * widthRef,
            }}>
            <Icon
              type={'Entypo'}
              name={!showPassword ? 'eye' : 'eye-with-line'}
              color="white"
              size={18 * heightRef}
            />
          </TouchableOpacity>
        ) : null}
        {emailValidation === true ? (
          <TouchableOpacity
            disabled={true}
            style={{
              position: 'absolute',
              right: 20 * widthRef,
            }}>
            <Icon
              type={'Entypo'}
              name={showTick ? 'check' : null}
              size={18 * heightRef}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      <Text style={{fontSize: 11 * heightRef, paddingVertical: 5}}>
        {message}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    width: '100%',
    minHeight: 145 * heightRef,
  },
  textView: state => ({
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    padding: state ? 10 * heightRef : 0,
    marginVertical: state ? 3 : 0,
  }),
  textField: state => ({
    backgroundColor: globalStyles.Theme.white,
    width: '100%',

    paddingHorizontal: state ? 0 : 20 * widthRef,

    flex: 1,
    fontSize: 18 * heightRef,
  }),
});
export default React.forwardRef(InputField);
