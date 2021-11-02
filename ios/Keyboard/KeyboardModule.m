//
//  KeyboardModule.m
//  Keyboard
//
//  Created by Nomads on 2021-10-22.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE (KeyboardModule, NSObject)

RCT_EXTERN_METHOD(insertSticker
                  : (NSString *)stickerUrl resolver
                  : (RCTPromiseResolveBlock)resolve rejector
                  : (RCTPromiseRejectBlock)reject)

@end
