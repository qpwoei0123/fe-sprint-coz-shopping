import React, { useEffect, useState } from'react';
import {S} from './Category.styles'
import CategoryAll from '../images/전체.png'
import CategoryProduct from '../images/상품.png'
import CategoryBrand from '../images/브랜드.png'
import CategoryCategory from '../images/카테고리.png'
import CategoryExhibition from '../images/기획전.png'

export default function Category() {

    const Category = ['전체', '상품', '브랜드', '카테고리', '기획전']

    return (
      <S.Container>
        <S.CategoryContainer>
          <S.StyledLink to="./all">
          <S.CategoryBox>
            <img src={CategoryAll} alt="전체" />
            <S.Name>전체</S.Name>
          </S.CategoryBox>
          </S.StyledLink>

          <S.StyledLink to="./product">
          <S.CategoryBox>
            <img src={CategoryProduct} alt="상품" />
            <S.Name>상품</S.Name>
          </S.CategoryBox>
          </S.StyledLink>

          <S.StyledLink to="./brand">
          <S.CategoryBox>
            <img src={CategoryBrand} alt="브랜드"/>
            <S.Name>브랜드</S.Name>
          </S.CategoryBox>
          </S.StyledLink>

          <S.StyledLink to="./category">
          <S.CategoryBox>
            <img src={CategoryCategory} alt="카테고리"/>
            <S.Name>카테고리</S.Name>
          </S.CategoryBox>
          </S.StyledLink>

          <S.StyledLink to="./exhibition">
          <S.CategoryBox>
            <img src={CategoryExhibition} alt="기획전"/>
            <S.Name>기획전</S.Name>
          </S.CategoryBox>
          </S.StyledLink>

        </S.CategoryContainer>
      </S.Container>
    )
  }