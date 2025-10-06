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
        .appendField("初始化 piCar");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["PICAR_SETUP_HUE"]);
    this.setTooltip("初始化 piCar 所需的腳位與變數");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['picar_set_hand_range'] = {
  init: function() {
    this.appendValueInput("RANGE")
        .setCheck("Number")
        .appendField("設定手臂開合範圍");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["PICAR_SETUP_HUE"]);
    this.setTooltip("設定手臂開合的角度範圍，預設 170°");
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
        .appendField("重新啟動 piCar");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["PICAR_SETUP_HUE"]);
    this.setTooltip("重新啟動 piCar");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['picar_drive'] = {
  init: function() {
    this.appendValueInput("POWER_L")
        .setCheck("Number")
        .appendField("直流馬達 左輪動力");
    this.appendValueInput("POWER_R")
        .setCheck("Number")
        .appendField("右輪動力");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["PICAR_HUE"]);
    this.setTooltip("控制左右輪動力 (-255~255)");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['picar_coast'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("停車並滑行");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["PICAR_HUE"]);
    this.setTooltip("停止並讓車子滑行");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['picar_brake'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("煞車");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["PICAR_HUE"]);
    this.setTooltip("煞車");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['picar_checkDistance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("偵測距離 (cm)");
    this.setOutput(true, "Number");
    this.setColour(Blockly.Msg["COLOR_SENSOR_HUE"]);
    this.setTooltip("使用超音波偵測前方障礙物距離 (cm)");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['picar_checkColor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("偵測顏色 (黑0/白1)");
    this.setOutput(true, "Number");
    this.setColour(Blockly.Msg["COLOR_SENSOR_HUE"]);
    this.setTooltip("使用紅外線偵測地面顏色，回傳 0 為黑色，1 為白色");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['picar_inPosition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("手臂歸位");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["SERVO_HUE"]);
    this.setTooltip("手臂伺服馬達歸位");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['picar_closeHands'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("手臂合起");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["SERVO_HUE"]);
    this.setTooltip("手臂合起");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['picar_openHands'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("手臂張開");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["SERVO_HUE"]);
    this.setTooltip("手臂張開");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['picar_flashingLight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("閃爍 RGB 燈");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["MEDIA_HUE"]);
    this.setTooltip("閃爍 RGB 燈");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['picar_easterEgg'] = {
  init: function() {
    this.appendValueInput("TEMPO")
        .setCheck("Number")
        .appendField("播放彩蛋旋律 全音符的時間 (ms)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["MEDIA_HUE"]);
    this.setTooltip("播放一段旋律，tempo 數值愈大愈快");
    this.setHelpUrl("");
  }
};



Blockly.Blocks['picar_rawCode'] = {
  init: function() {
    this.appendDummyInput()
        // 區塊最左邊的文字
        .appendField("自由寫"); 
    
    // 關鍵修改：使用 Blockly.FieldMultilineInput 欄位
    this.appendDummyInput('CODE_INPUT')
        .appendField(new Blockly.FieldMultilineInput(''), 'CODE'); // 'CODE' 是欄位的名稱
    
    // 設置外觀和連接
    this.setPreviousStatement(true, null); // 允許前面連接
    this.setNextStatement(true, null);     // 允許後面連接
    this.setColour(Blockly.Msg["ADVANCED_HUE"]);
    this.setTooltip("可填入任意程式碼或註解");
    this.setHelpUrl("");
    
    // 將輸入設定為非內嵌，讓多行輸入框有更多空間
    this.setInputsInline(false); 
  }
};
