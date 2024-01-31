import type { JsonSchema, SchemaType } from '@/components/JsonSchema'

import type { ApiStatus, CatalogType, HttpMethod, MenuType } from './enums'

export type TabContentType = CatalogType | MenuType.Folder | 'blank'

/** 请求参数信息。 */
interface Parameter {
  id: string
  name?: string
  enabled?: boolean
  required?: boolean
  type?: SchemaType
  description?: string
  example?: string
}

export interface ApiDetailsResponseExample {
  id: string
  name: string
  data: string
}

export interface ApiDetails {
  /** 唯一标识 */
  id: string
  /** 请求方法 */
  method: HttpMethod
  /** 接口路径 */
  path?: string
  /** 接口名称 */
  name?: string
  /** 接口状态 */
  status: ApiStatus
  /** 责任人 */
  responsibleId?: string
  /** 修改者 */
  editorId?: string
  /** 创建者 */
  creatorId?: string
  /** 接口标签 */
  tags?: string[]
  /** 前置 URL 选择 */
  serverId?: string
  /** 请求参数 */
  parameters?: {
    cookie?: []
    header?: []
    query?: Parameter[]
  }
  /** 请求参数 - Body */
  requestBody?: {
    parameters: Parameter[]
  }
  /** 返回响应 */
  responses?: {
    /** HTTP 状态码 */
    code?: number
    /** 名称 */
    name?: string
    /** 内容格式 */
    contentType?: string
    jsonSchema?: JsonSchema
  }[]
  /** 响应示例 */
  responseExamples?: ApiDetailsResponseExample[]
  /** 接口文档创建时间 */
  createdAt?: string
  /** 接口文档更新时间 */
  updatedAt?: string
}
