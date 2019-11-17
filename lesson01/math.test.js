// 1.最初测试用例代码
var result = add(3,7)
var expected = 10

if(result !== 10){
  throw Error(`3+7应该等于${expected},但是结果确实${result}`)
}

var result = minus(5,2)
var expected = 3

if(result !== 3){
  throw Error(`5-2应该等于${expected},但是结果确实${result}`)
}
// 2.封装成函数
function expect(result){
  return {
    toBe: function(actual){
      if(result != actual){
        throw new Error('预期值与实际值不想等')
      }
    }
  }
}
//  expect(add(3,3)).toBe(6)
// expect(minus(5,3))).toBe(2


// 3.对每个测试用例进行一个描述

function test(desc, fn){
  try{
    fn();
  }catch(e){
    console.log(`${desc} 没有通过测试 ${e}`)
  }
}

test('测试加法 3 + 7',()=>{
  expect(add(3,5)).toBe(8)
})

// 可以将实例代码复制到控制台console进行测试