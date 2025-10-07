// Traditional Chinese language file
Blockly.Msg["SIMFONIA_CATEGORY"] = "simfonia";
Blockly.Msg["PICAR_CATEGORY"] = "πCar";
Blockly.Msg["ARDUINO_CATEGORY"] = "Arduino";
Blockly.Msg["SIMFONIA_HUE"] = "#5b33a5"; // A nice purple
Blockly.Msg["ARDUINO_HUE"] = "#4287f5"; // for Arduino
Blockly.Msg["PICAR_HUE"] = "#ee5b56"; // for piCar movement
Blockly.Msg["PICAR_SETUP_HUE"] = "#0872e2"; // for initialization
Blockly.Msg["COLOR_SENSOR_HUE"] = "#b1b100"; // for sensor
Blockly.Msg["SERVO_HUE"] = "#07a91d"; // for servo
Blockly.Msg["MEDIA_HUE"] = "#de57ad"; // for multimedia
Blockly.Msg["ADVANCED_HUE"] = "#556f79"; // for advanced coding
Blockly.Msg["ARDUINO_CONTROL_HUE"] = "#0872e2"; // for Arduino I/O
Blockly.Msg["ARDUINO_DIGITAL_IO_HUE"] = "#455A64"; // for Arduino Digital I/O
Blockly.Msg["ARDUINO_ANALOG_IO_HUE"] = "#FF9800"; // for Arduino Analog I/O

// Block Keys
Blockly.Msg["PICAR_INIT"] = "初始化 piCar";
Blockly.Msg["PICAR_INIT_TOOLTIP"] = "初始化 piCar 所需的腳位與變數";
Blockly.Msg["PICAR_SET_HAND_RANGE"] = "設定手臂開合範圍(0~180)";
Blockly.Msg["PICAR_SET_HAND_RANGE_TOOLTIP"] = "設定手臂開合的角度範圍，預設 170°";
Blockly.Msg["PICAR_RESET"] = "重新啟動 piCar";
Blockly.Msg["PICAR_RESET_TOOLTIP"] = "重新啟動 piCar";
Blockly.Msg["PICAR_DRIVE_LEFT"] = "直流馬達動力(-255 ~ 255) 左:";
Blockly.Msg["PICAR_DRIVE_RIGHT"] = "右:";
Blockly.Msg["PICAR_DRIVE_TOOLTIP"] = "控制左右輪動力 (-255 ~ 255)";
Blockly.Msg["PICAR_STOP"] = "停車";
Blockly.Msg["PICAR_STOP_COAST"] = "滑行";
Blockly.Msg["PICAR_STOP_BRAKE"] = "煞車";
Blockly.Msg["PICAR_STOP_TOOLTIP"] = "選擇停車方式：煞車或滑行";
Blockly.Msg["PICAR_CHECK_DISTANCE"] = "偵測距離 (cm)";
Blockly.Msg["PICAR_CHECK_DISTANCE_TOOLTIP"] = "使用超音波偵測前方障礙物距離 (cm)";
Blockly.Msg["PICAR_CHECK_COLOR"] = "偵測顏色 (黑0/白1)";
Blockly.Msg["PICAR_CHECK_COLOR_TOOLTIP"] = "使用紅外線偵測地面顏色，回傳 0 為黑色，1 為白色";
Blockly.Msg["PICAR_IN_POSITION"] = "手臂歸位";
Blockly.Msg["PICAR_IN_POSITION_TOOLTIP"] = "手臂伺服馬達歸位";
Blockly.Msg["PICAR_SET_LEFT_HAND_ANGLE"] = "設定左手角度為(180->0 順時針)";
Blockly.Msg["PICAR_SET_LEFT_HAND_ANGLE_TOOLTIP"] = "設定左手臂伺服馬達角度 (0-180)。初始位置在 180 度。";
Blockly.Msg["PICAR_SET_RIGHT_HAND_ANGLE"] = "設定右手角度為(0->180 逆時針)";
Blockly.Msg["PICAR_SET_RIGHT_HAND_ANGLE_TOOLTIP"] = "設定右手臂伺服馬達角度 (0-180)。初始位置在 0 度。";
Blockly.Msg["PICAR_CLOSE_HANDS"] = "手臂合起";
Blockly.Msg["PICAR_CLOSE_HANDS_TOOLTIP"] = "手臂合起";
Blockly.Msg["PICAR_OPEN_HANDS"] = "手臂張開";
Blockly.Msg["PICAR_OPEN_HANDS_TOOLTIP"] = "手臂張開";
Blockly.Msg["PICAR_FLASHING_LIGHT"] = "閃爍 RGB 燈";
Blockly.Msg["PICAR_FLASHING_LIGHT_TOOLTIP"] = "閃爍 RGB 燈";

Blockly.Msg["PICAR_SET_LED_COLOR"] = "設定 RGB 燈";
Blockly.Msg["PICAR_SET_LED_COLOR_TOOLTIP"] = "設定指定 RGB 燈的顏色";
Blockly.Msg["PICAR_LED_LEFT"] = "後燈";
Blockly.Msg["PICAR_LED_RIGHT"] = "前燈";
Blockly.Msg["PICAR_LED_ALL"] = "所有燈";
Blockly.Msg["PICAR_COLOR"] = "顏色為";

Blockly.Msg["PICAR_EASTER_EGG"] = "播放彩蛋旋律 全音符的時間 (ms)";
Blockly.Msg["PICAR_EASTER_EGG_TOOLTIP"] = "播放一段旋律，數值愈大愈慢";
Blockly.Msg["PICAR_RAW_CODE"] = "自由寫";
Blockly.Msg["PICAR_RAW_CODE_TOOLTIP"] = "可填入任意程式碼或註解";

// Arduino Blocks
Blockly.Msg["ARDUINO_PIN_MODE"] = "pinMode(腳位: %1, 模式: %2)";
Blockly.Msg["ARDUINO_PIN_MODE_TOOLTIP"] = "將指定的腳位設定為輸入或輸出。詳細資訊請見 https://www.arduino.cc/reference/en/language/functions/digital-io/pinmode/";
Blockly.Msg["ARDUINO_PIN_MODE_INPUT"] = "INPUT";
Blockly.Msg["ARDUINO_PIN_MODE_OUTPUT"] = "OUTPUT";
Blockly.Msg["ARDUINO_PIN_MODE_INPUT_PULLUP"] = "INPUT_PULLUP";

Blockly.Msg["ARDUINO_DIGITAL_READ"] = "digitalRead(腳位: %1)";
Blockly.Msg["ARDUINO_DIGITAL_READ_TOOLTIP"] = "讀取指定數位腳位的狀態，HIGH 或 LOW。詳細資訊請見 https://www.arduino.cc/reference/en/language/functions/digital-io/digitalread/";
Blockly.Msg["ARDUINO_DIGITAL_WRITE"] = "digitalWrite(腳位: %1, 值: %2)";
Blockly.Msg["ARDUINO_DIGITAL_WRITE_TOOLTIP"] = "將 HIGH 或 LOW 值寫入數位腳位。詳細資訊請見 https://www.arduino.cc/reference/en/language/functions/digital-io/digitalwrite/";
Blockly.Msg["ARDUINO_HIGH"] = "HIGH";
Blockly.Msg["ARDUINO_LOW"] = "LOW";

Blockly.Msg["ARDUINO_ANALOG_READ"] = "analogRead(腳位: %1)";
Blockly.Msg["ARDUINO_ANALOG_READ_TOOLTIP"] = "讀取指定類比腳位的狀態。詳細資訊請見 https://www.arduino.cc/reference/en/language/functions/analog-io/analogread/";
Blockly.Msg["ARDUINO_ANALOG_WRITE"] = "analogWrite(腳位: %1, 值: %2)";
Blockly.Msg["ARDUINO_ANALOG_WRITE_TOOLTIP"] = "將類比值 (PWM 波) 寫入腳位。詳細資訊請見 https://www.arduino.cc/reference/en/language/functions/analog-io/analogwrite/";