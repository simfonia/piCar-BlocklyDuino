// 先清除原有的工作區所預設的積木
// Use a global flag to ensure this cleanup runs only once.
if (typeof window.simfoniaCleanupDone === 'undefined') {
  window.simfoniaCleanupDone = true;
  
  // Wait for all initializations to complete, then clean up the workspace.
  setTimeout(function() {
    if (typeof Blockly !== "undefined" && Blockly.mainWorkspace) {
      Blockly.mainWorkspace.clear();
      newFile();
    }
  }, 1000); // Set the delay to 1 second
}


// 積木的外觀

Blockly.Blocks['picar_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PICAR_INIT"]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["PICAR_SETUP_HUE"]);
    this.setTooltip(Blockly.Msg["PICAR_INIT_TOOLTIP"]);
    this.setHelpUrl("");
  }
};


Blockly.Blocks['picar_set_hand_range'] = {
  init: function() {
    this.appendValueInput("RANGE")
        .setCheck("Number")
        .appendField(Blockly.Msg["PICAR_SET_HAND_RANGE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["PICAR_SETUP_HUE"]);
    this.setTooltip(Blockly.Msg["PICAR_SET_HAND_RANGE_TOOLTIP"]);
    this.setHelpUrl("");
  },
  onchange: function(event) {
    var rangeBlock = this.getInputTargetBlock('RANGE');
    if (rangeBlock && rangeBlock.type === 'math_number') {
      var numberValue = parseFloat(rangeBlock.getFieldValue('NUM'));
      if (!isNaN(numberValue)) {
        if (numberValue < 0) {
          rangeBlock.setFieldValue('0', 'NUM');
        } else if (numberValue > 180) {
          rangeBlock.setFieldValue('180', 'NUM');
        }
      }
    }
  }
};


Blockly.Blocks['picar_resetPiCar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PICAR_RESET"]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["PICAR_SETUP_HUE"]);
    this.setTooltip(Blockly.Msg["PICAR_RESET_TOOLTIP"]);
    this.setHelpUrl("");
  }
};


Blockly.Blocks['picar_drive'] = {
  init: function() {
    this.appendValueInput("POWER_L")
        .setCheck("Number")
        .appendField(Blockly.Msg["PICAR_DRIVE_LEFT"]);
    this.appendValueInput("POWER_R")
        .setCheck("Number")
        .appendField(Blockly.Msg["PICAR_DRIVE_RIGHT"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["PICAR_HUE"]);
    this.setTooltip(Blockly.Msg["PICAR_DRIVE_TOOLTIP"]);
    this.setHelpUrl("");
  }
};

Blockly.Blocks['picar_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PICAR_STOP"])
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg["PICAR_STOP_BRAKE"], "BRAKE"],
          [Blockly.Msg["PICAR_STOP_COAST"], "COAST"]
        ]), "MODE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["PICAR_HUE"]);
    this.setTooltip(Blockly.Msg["PICAR_STOP_TOOLTIP"]);
    this.setHelpUrl("");
  }
};

Blockly.Blocks['picar_checkDistance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PICAR_CHECK_DISTANCE"]);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Msg["COLOR_SENSOR_HUE"]);
    this.setTooltip(Blockly.Msg["PICAR_CHECK_DISTANCE_TOOLTIP"]);
    this.setHelpUrl("");
  }
};

Blockly.Blocks['picar_checkColor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PICAR_CHECK_COLOR"]);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Msg["COLOR_SENSOR_HUE"]);
    this.setTooltip(Blockly.Msg["PICAR_CHECK_COLOR_TOOLTIP"]);
    this.setHelpUrl("");
  }
};


Blockly.Blocks['picar_inPosition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PICAR_IN_POSITION"]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["SERVO_HUE"]);
    this.setTooltip(Blockly.Msg["PICAR_IN_POSITION_TOOLTIP"]);
    this.setHelpUrl("");
  }
};


Blockly.Blocks['picar_set_left_hand_angle'] = {
  init: function() {
    this.appendValueInput("ANGLE")
        .setCheck("Number")
        .appendField(Blockly.Msg["PICAR_SET_LEFT_HAND_ANGLE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["SERVO_HUE"]);
    this.setTooltip(Blockly.Msg["PICAR_SET_LEFT_HAND_ANGLE_TOOLTIP"]);
    this.setHelpUrl("");
  }
};

Blockly.Blocks['picar_set_right_hand_angle'] = {
  init: function() {
    this.appendValueInput("ANGLE")
        .setCheck("Number")
        .appendField(Blockly.Msg["PICAR_SET_RIGHT_HAND_ANGLE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["SERVO_HUE"]);
    this.setTooltip(Blockly.Msg["PICAR_SET_RIGHT_HAND_ANGLE_TOOLTIP"]);
    this.setHelpUrl("");
  }
};


Blockly.Blocks['picar_closeHands'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PICAR_CLOSE_HANDS"]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["SERVO_HUE"]);
    this.setTooltip(Blockly.Msg["PICAR_CLOSE_HANDS_TOOLTIP"]);
    this.setHelpUrl("");
  }
};

Blockly.Blocks['picar_openHands'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PICAR_OPEN_HANDS"]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["SERVO_HUE"]);
    this.setTooltip(Blockly.Msg["PICAR_OPEN_HANDS_TOOLTIP"]);
    this.setHelpUrl("");
  }
};

Blockly.Blocks['picar_set_led_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PICAR_SET_LED_COLOR"])
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg["PICAR_LED_LEFT"], "0"],
          [Blockly.Msg["PICAR_LED_RIGHT"], "1"],
          [Blockly.Msg["PICAR_LED_ALL"], "ALL"]
        ]), "LED_INDEX")
        .appendField(Blockly.Msg["PICAR_COLOR"])
        .appendField(new Blockly.FieldColour("#ff0000"), "COLOR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["MEDIA_HUE"]);
    this.setTooltip(Blockly.Msg["PICAR_SET_LED_COLOR_TOOLTIP"]);
    this.setHelpUrl("");
  }
};

Blockly.Blocks['picar_flashingLight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PICAR_FLASHING_LIGHT"]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["MEDIA_HUE"]);
    this.setTooltip(Blockly.Msg["PICAR_FLASHING_LIGHT_TOOLTIP"]);
    this.setHelpUrl("");
  }
};


Blockly.Blocks['picar_easterEgg'] = {
  init: function() {
    this.appendValueInput("TEMPO")
        .setCheck("Number")
        .appendField(Blockly.Msg["PICAR_EASTER_EGG"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["MEDIA_HUE"]);
    this.setTooltip(Blockly.Msg["PICAR_EASTER_EGG_TOOLTIP"]);
    this.setHelpUrl("");
  }
};



Blockly.Blocks['picar_rawCode'] = {
  init: function() {
    this.appendDummyInput()
        // 區塊最左邊的文字
        .appendField(Blockly.Msg["PICAR_RAW_CODE"]); 
    
    // 關鍵修改：使用 Blockly.FieldMultilineInput 欄位
    this.appendDummyInput('CODE_INPUT')
        .appendField(new Blockly.FieldMultilineInput(''), 'CODE'); // 'CODE' 是欄位的名稱
    
    // 設置外觀和連接
    this.setPreviousStatement(true, null); // 允許前面連接
    this.setNextStatement(true, null);     // 允許後面連接
    this.setColour(Blockly.Msg["ADVANCED_HUE"]);
    this.setTooltip(Blockly.Msg["PICAR_RAW_CODE_TOOLTIP"]);
    this.setHelpUrl("");
    
    // 將輸入設定為非內嵌，讓多行輸入框有更多空間
    this.setInputsInline(false); 
  }
};
