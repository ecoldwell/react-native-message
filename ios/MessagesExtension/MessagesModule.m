//
//  MessagesModule.m
//  MessagesExtension
//
//  Created by Nomads on 2021-10-13.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE (MessagesModule, NSObject)

RCT_EXTERN_METHOD(insertSticker
                  : (NSString *)stickerUrl resolver
                  : (RCTPromiseResolveBlock)resolve rejector
                  : (RCTPromiseRejectBlock)reject)

@end
