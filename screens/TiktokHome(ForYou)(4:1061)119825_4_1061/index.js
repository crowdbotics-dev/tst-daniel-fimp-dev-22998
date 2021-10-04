import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b57b/be38/0959768fbe836fce7603564bb90de679"
        }}
        style={styles.ImageBackground_4_1062}
      />
      <View style={styles.View_4_1063}>
        <View style={styles.View_4_1064}>
          <Text style={styles.Text_4_1064}>@craig_love</Text>
        </View>
        <View style={styles.View_4_1065}>
          <Text style={styles.Text_4_1065}>
            The most satisfying Job #fyp #satisfying #roadmarking
          </Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d130/5c87/7ec333bfe17e8b44f484e2306ecc9592"
        }}
        style={styles.ImageBackground_4_1066}
      />
      <View style={styles.View_4_1069}>
        <View style={styles.View_4_1070}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49b8/f4f6/28f6da18b674106f3140132b63233799"
            }}
            style={styles.ImageBackground_4_1071}
          />
          <View style={styles.View_4_1074}>
            <Text style={styles.Text_4_1074}>Share</Text>
          </View>
        </View>
        <View style={styles.View_4_1075}>
          <View style={styles.View_4_1076}>
            <Text style={styles.Text_4_1076}>578</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e163/e429/09bca0867e37866c9688b709382bb7b2"
            }}
            style={styles.ImageBackground_4_1077}
          />
        </View>
        <View style={styles.View_4_1080}>
          <View style={styles.View_4_1081}>
            <Text style={styles.Text_4_1081}>328.7K</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9a1/7415/1421f2fc0b351856338a393ce260d357"
            }}
            style={styles.ImageBackground_4_1082}
          />
        </View>
      </View>
      <View style={styles.View_4_1085}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3721/c54a/13fd8066d7d308c6e7abececa8b7baa4"
          }}
          style={styles.ImageBackground_4_1086}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7cf/b31d/3ac3518ed71f05bf19586eb005c215ef"
          }}
          style={styles.ImageBackground_4_1087}
        />
      </View>
      <View style={styles.View_4_1090}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c02/1684/f076eee6481a24a269a1a63af80d7931"
          }}
          style={styles.ImageBackground_4_1091}
        />
        <View style={styles.View_4_1092}>
          <Text style={styles.Text_4_1092}>Roddy Roundicch - The Rou</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ab/76ae/f2d8d685d4e5a980506f9d6c248d8ff0"
        }}
        style={styles.ImageBackground_4_1093}
      />
      <View style={styles.View_4_1097}>
        <View style={styles.View_4_1098} />
        <View style={styles.View_4_1099}>
          <View style={styles.View_4_1100} />
          <View style={styles.View_4_1101} />
          <View style={styles.View_4_1102} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fb3/fa39/bf9633768341bdb4925bd64627e1d7ea"
            }}
            style={styles.ImageBackground_4_1103}
          />
        </View>
        <View style={styles.View_4_1104}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7b3/4527/bf722dbdae5a40f0bf23bcafaa555014"
            }}
            style={styles.ImageBackground_4_1105}
          />
          <View style={styles.View_4_1106}>
            <Text style={styles.Text_4_1106}>Home</Text>
          </View>
        </View>
        <View style={styles.View_4_1107}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b8/35fe/0d415c35f2d3baaaa917ca8ce916abc5"
            }}
            style={styles.ImageBackground_4_1108}
          />
          <View style={styles.View_4_1109}>
            <Text style={styles.Text_4_1109}>Discover</Text>
          </View>
        </View>
        <View style={styles.View_4_1110}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc70/675a/ca5cba70a01abcafbfe3c8cf40062001"
            }}
            style={styles.ImageBackground_4_1111}
          />
          <View style={styles.View_4_1112}>
            <Text style={styles.Text_4_1112}>Inbox</Text>
          </View>
        </View>
        <View style={styles.View_4_1113}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f38/69df/4caf71b5936fab36773cf11626ce4e86"
            }}
            style={styles.ImageBackground_4_1114}
          />
          <View style={styles.View_4_1115}>
            <Text style={styles.Text_4_1115}>Me</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_4_1116}>
        <View style={styles.View_4_1117}>
          <Text style={styles.Text_4_1117}>Following</Text>
        </View>
        <View style={styles.View_4_1118}>
          <Text style={styles.Text_4_1118}>For You</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c8f/4480/6b71d28b6a81dc33faedbd7665be158d"
          }}
          style={styles.ImageBackground_4_1119}
        />
      </View>
      <View style={styles.View_4_1120}>
        <View style={styles.View_4_1121} />
        <View style={styles.View_4_1122} />
      </View>
      <View style={styles.View_4_1123}>
        <View style={styles.View_4_1124} />
        <View style={styles.View_4_1125}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c4d/d8a4/5898ea6223f3866c96a0a2b0f8dbf697"
            }}
            style={styles.ImageBackground_4_1126}
          />
          <View style={styles.View_4_1129}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5e/65c1/5989f51caa4acec8db82e3c4db888257"
              }}
              style={styles.ImageBackground_4_1130}
            />
            <View style={styles.View_4_1131} />
          </View>
          <View style={styles.View_4_1132} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_4_1133}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_4_1137}
        />
        <View style={styles.View_4_1142}>
          <View style={styles.View_4_1143}>
            <Text style={styles.Text_4_1143}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_4_1062: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_1063: {
    width: wp("80.19323671497585%"),
    minWidth: wp("80.19323671497585%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.898550724637681%"),
    top: hp("96.03825136612022%")
  },
  View_4_1064: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_1064: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_1065: {
    width: wp("80.19323671497585%"),
    minWidth: wp("80.19323671497585%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_4_1065: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_1066: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.23188405797102%"),
    top: hp("102.73224043715847%")
  },
  View_4_1069: {
    width: wp("9.903381642512077%"),
    minWidth: wp("9.903381642512077%"),
    height: hp("28.415300546448087%"),
    minHeight: hp("28.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.80193236714976%"),
    top: hp("70.21857923497268%")
  },
  View_4_1070: {
    width: wp("8.272946859903382%"),
    minWidth: wp("8.272946859903382%"),
    height: hp("7.035519125683059%"),
    minHeight: hp("7.035519125683059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6642512077294782%"),
    top: hp("21.379781420765028%")
  },
  ImageBackground_4_1071: {
    width: wp("8.231549101751208%"),
    minWidth: wp("8.231549101751208%"),
    height: hp("3.666828760032445%"),
    minHeight: hp("3.666828760032445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_1074: {
    width: wp("8.212560386473431%"),
    minWidth: wp("8.212560386473431%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06038647342994352%"),
    top: hp("4.8497267759562845%"),
    justifyContent: "flex-start"
  },
  Text_4_1074: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_1075: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    height: hp("7.44535519125683%"),
    minHeight: hp("7.44535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6038647342995205%"),
    top: hp("10.450819672131146%")
  },
  View_4_1076: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5700483091787447%"),
    top: hp("5.259562841530055%"),
    justifyContent: "flex-start"
  },
  Text_4_1076: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_1077: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    height: hp("4.539097853697062%"),
    minHeight: hp("4.539097853697062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_1080: {
    width: wp("9.903381642512077%"),
    minWidth: wp("9.903381642512077%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_1081: {
    width: wp("9.903381642512077%"),
    minWidth: wp("9.903381642512077%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601091%"),
    justifyContent: "flex-start"
  },
  Text_4_1081: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_1082: {
    width: wp("8.57487922705314%"),
    minWidth: wp("8.57487922705314%"),
    height: hp("4.420646292264344%"),
    minHeight: hp("4.420646292264344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6038647342995205%"),
    top: hp("0%")
  },
  View_4_1085: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("7.991803278688526%"),
    minHeight: hp("7.991803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.95652173913044%"),
    top: hp("59.15300546448088%")
  },
  ImageBackground_4_1086: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_1087: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1400966183574894%"),
    top: hp("5.12295081967212%")
  },
  View_4_1090: {
    width: wp("49.75845410628019%"),
    minWidth: wp("49.75845410628019%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.140096618357488%"),
    top: hp("106.9672131147541%")
  },
  ImageBackground_4_1091: {
    width: wp("2.898550724637681%"),
    height: hp("1.639344262295082%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_1092: {
    width: wp("44.68599033816425%"),
    minWidth: wp("44.68599033816425%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072463768115943%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_1092: {
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_1093: {
    width: wp("13.659837510850695%"),
    minWidth: wp("13.659837510850695%"),
    height: hp("9.225280428193305%"),
    minHeight: hp("9.225280428193305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.7654088706786%"),
    top: hp("101.33703679986338%")
  },
  View_4_1097: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("111.0655737704918%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_1098: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.293721850452528%"),
    minHeight: hp("11.293721850452528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04507596375513856%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_4_1099: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.806763285024154%"),
    top: hp("1.1612021857923622%")
  },
  View_4_1100: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%"),
    top: hp("0%"),
    backgroundColor: "rgba(230, 67, 109, 1)"
  },
  View_4_1101: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(101, 210, 233, 1)"
  },
  View_4_1102: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.845410628019323%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_4_1103: {
    width: wp("3.140096618357488%"),
    minWidth: wp("3.140096618357488%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6231884057971016%"),
    top: hp("1.0587431693988947%")
  },
  View_4_1104: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: hp("5.122950819672131%"),
    minHeight: hp("5.122950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.642512077294686%"),
    top: hp("0.9562841530054698%")
  },
  ImageBackground_4_1105: {
    width: wp("5.613995980525362%"),
    minWidth: wp("5.613995980525362%"),
    height: hp("2.8585465227971314%"),
    minHeight: hp("2.8585465227971314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.483091787439613%"),
    top: hp("0%")
  },
  View_4_1106: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.483606557377044%"),
    justifyContent: "flex-start"
  },
  Text_4_1106: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_4_1107: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.122950819672131%"),
    minHeight: hp("5.122950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.24154589371981%"),
    top: hp("0.9562841530054698%")
  },
  ImageBackground_4_1108: {
    width: wp("4.936712145229468%"),
    minWidth: wp("4.936712145229468%"),
    height: hp("2.8486741696550544%"),
    minHeight: hp("2.8486741696550544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.294685990338163%"),
    top: hp("0%")
  },
  View_4_1109: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.483606557377044%"),
    justifyContent: "flex-start"
  },
  Text_4_1109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_4_1110: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("4.9863387978142075%"),
    minHeight: hp("4.9863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.02898550724638%"),
    top: hp("1.092896174863398%")
  },
  ImageBackground_4_1111: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.8044486957821038%"),
    minHeight: hp("2.8044486957821038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6038647342995205%"),
    top: hp("0%")
  },
  View_4_1112: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.3469945355191157%"),
    justifyContent: "flex-start"
  },
  Text_4_1112: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_4_1113: {
    width: wp("4.40007453955314%"),
    minWidth: wp("4.40007453955314%"),
    height: hp("5.122950819672131%"),
    minHeight: hp("5.122950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.80193236714976%"),
    top: hp("0.9562841530054698%")
  },
  ImageBackground_4_1114: {
    width: wp("4.40007453955314%"),
    minWidth: wp("4.40007453955314%"),
    height: hp("2.825510827570014%"),
    minHeight: hp("2.825510827570014%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_1115: {
    width: wp("3.3816425120772946%"),
    minWidth: wp("3.3816425120772946%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6038647342995205%"),
    top: hp("3.483606557377044%"),
    justifyContent: "flex-start"
  },
  Text_4_1115: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_4_1116: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.0109289617486334%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_1117: {
    width: wp("16.908212560386474%"),
    minWidth: wp("16.908212560386474%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.88405797101449%"),
    top: hp("1.7759562841530059%"),
    justifyContent: "flex-start"
  },
  Text_4_1117: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_1118: {
    width: wp("14.975845410628018%"),
    minWidth: wp("14.975845410628018%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.864734299516904%"),
    top: hp("1.502732240437159%"),
    justifyContent: "flex-start"
  },
  Text_4_1118: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_4_1119: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.81159420289855%"),
    top: hp("2.254098360655738%")
  },
  View_4_1120: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("117.62295081967213%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_1121: {
    width: wp("100%"),
    height: hp("4.781420765027322%"),
    top: hp("-0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_4_1122: {
    width: wp("32.367149758454104%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81642512077295%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(233, 233, 233, 1)"
  },
  View_4_1123: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_1124: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("-0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_4_1125: {
    width: wp("5.917874396135265%"),
    minWidth: wp("5.917874396135265%"),
    height: hp("1.4344262295081966%"),
    minHeight: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.57971014492753%"),
    top: hp("2.3224043715846996%")
  },
  ImageBackground_4_1126: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_1129: {
    width: wp("0.36231884057971014%"),
    minWidth: wp("0.36231884057971014%"),
    height: hp("0.529238174521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555571%"),
    top: hp("0.4781420765027322%")
  },
  ImageBackground_4_1130: {
    width: wp("0.966183574879227%"),
    minWidth: wp("0.966183574879227%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6038647342995205%"),
    top: hp("-0.008604956454917989%")
  },
  View_4_1131: {
    width: wp("0.6038647342995169%"),
    minWidth: wp("0.6038647342995169%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6038647342995205%"),
    top: hp("-0.008604956454917989%"),
    backgroundColor: "rgba(62, 81, 85, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_4_1132: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("0.8879781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: hp("0.27322404371584685%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_4_1133: {
    width: wp("4.072637143342392%"),
    height: hp("1.4980295316769126%"),
    top: hp("2.2309516948428962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499490489131%")
  },
  ImageBackground_4_1137: {
    width: wp("4.533327259303291%"),
    height: hp("1.4572060173326502%"),
    top: hp("2.276878148480191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111129981884%")
  },
  View_4_1142: {
    width: wp("14.400001194166101%"),
    height: hp("2.459016393442623%"),
    top: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311595%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_1143: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_1143: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
