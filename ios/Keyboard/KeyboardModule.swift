//
//  KeyboardModule.swift
//  Keyboard
//
//  Created by Nomads on 2021-10-22.
//

import Foundation
import Keyboard


@objc(KeyboardModule)
class KeyboardModule: NSObject {
  let viewController: KeyboardViewController

  static func moduleName() -> String! {
    "RCTKeyboard"
  }

  static func requiresMainQueueSetup() -> Bool {
    false
  }
  
  init(viewController: KeyboardViewController) {
    self.viewController = viewController
  }

  /**
   Insert a sticker into the active conversation.
   */
 

      // After inserting a sticker, request that the extension collapse back to

}

