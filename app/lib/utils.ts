/*!
 * Copyright © 2022 United States Government as represented by the Administrator
 * of the National Aeronautics and Space Administration. No copyright is claimed
 * in the United States under Title 17, U.S. Code. All Other Rights Reserved.
 *
 * SPDX-License-Identifier: NASA-1.3
 */

export const publicStaticCacheControlHeaders = {
  'Cache-Control': 'public, max-age=315360000',
}

export function formatAndNoticeTypeToTopic(
  noticeFormat: string,
  noticeType: string
) {
  return `gcn.classic.${noticeFormat}.${noticeType}`
}

export function topicToFormatAndNoticeType(topic: string): {
  noticeFormat: string
  noticeType: string
} {
  const splitString = topic.split('.')
  return { noticeFormat: splitString[2], noticeType: splitString[3] }
}

export function getFormDataString(formData: FormData, key: string) {
  const value = formData.get(key)
  if (typeof value === 'string') {
    return value
  } else if (value === null) {
    return undefined
  } else {
    throw new Response(`expected ${key} to be a string`, { status: 400 })
  }
}
