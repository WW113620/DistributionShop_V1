using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Web;

namespace DistributionShop.Web.Attribute
{
    /// <summary>
    /// 引入jwt，暂时不用
    /// </summary>
    [Obsolete("引入jwt，暂时不用")]
    public class SecurityTokenService
    {
       /// <summary>
       /// 生成
       /// </summary>
       /// <param name="userId"></param>
       /// <param name="secretKey"></param>
       /// <returns></returns>
        public static string Get(int userId, string secretKey)
        {
            var now = DateTime.UtcNow;

            var claims = new Claim[]
            {
                new Claim(JwtRegisteredClaimNames.UniqueName, userId.ToString()),
                new Claim("secretKey", secretKey ?? string.Empty),
            };

            /**
                * Claims (Payload)
                   Claims 部分包含了一些跟这个 token 有关的重要信息。 JWT 标准规定了一些字段，下面节选一些字段:

                   iss: The issuer of the token，token 是给谁的  发送者
                   audience: 接收的
                   sub: The subject of the token，token 主题
                   exp: Expiration Time。 token 过期时间，Unix 时间戳格式
                   iat: Issued At。 token 创建时间， Unix 时间戳格式
                   jti: JWT ID。针对当前 token 的唯一标识
                   除了规定的字段外，可以包含其他任何 JSON 兼容的字段。
             * */
            string secret = ConfigurationManager.AppSettings["Secret"].ToString();
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secret));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var jwt = new JwtSecurityToken(
                claims: claims,
                notBefore: now,
                expires: now.Add(TimeSpan.FromSeconds(60 * 30)),
                signingCredentials: creds);
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return encodedJwt;
        }
    }
}