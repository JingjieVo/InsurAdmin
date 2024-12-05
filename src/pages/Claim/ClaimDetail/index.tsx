'use client'

import { useState, useEffect } from 'react'
import ButtonLink from '@/components/ButtonLink'
import { useParams } from 'react-router-dom'
import ClaimInfo from '../../../components/Container/Claim/ClaimInfo'
import ClaimedUserInfo from '../../../components/Container/Claim/ClaimedUserInfo'
import ContractInfo from '../../../components/Container/Claim/ContractInfo'
import GuestInfo from '../../../components/Container/Claim/GuestInfo'
import { getClaimById, updateStatusClaim } from '@/services/claimService'
import type { ClaimDetail } from '@/types/claimType'

export default function ClaimDetail() {
  const { id } = useParams()
  const [claim, setClaim] = useState<ClaimDetail | null>(null)
  const [loading, setLoading] = useState(false)
  const [isProcessed, setIsProcessed] = useState(false)

  useEffect(() => {
    if (id) {
      fetchClaimDetails(parseInt(id))
    }
  }, [id])

  useEffect(() => {
    if (claim) {
      setIsProcessed(claim.status !== 0)
    }
  }, [claim])

  const fetchClaimDetails = async (claimId: number) => {
    try {
      const data = await getClaimById(claimId)
      setClaim(data.data)
    } catch (error) {
      console.error("Error fetching claim details:", error)
    }
  }

  const handleStatusUpdate = async (status: number) => {
    if (!id) return
    
    setLoading(true)
    try {
      await updateStatusClaim(parseInt(id), status)
      // Refresh claim details after update
      await fetchClaimDetails(parseInt(id))
      setIsProcessed(true)
    } catch (error) {
      console.error("Error updating claim status:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="mb-4 flex flex-row justify-between">
        <ButtonLink title="Quay lại" href="/claim" />
        <div className="flex gap-4">
          {!isProcessed && claim?.status === 0 ? (
            <>
              <button
                onClick={() => handleStatusUpdate(2)}
                disabled={loading}
                className={`inline-flex items-center justify-center text-white rounded-md py-4 px-10 text-center font-medium lg:px-8 xl:px-10 ${
                  loading ? 'bg-gray-400' : 'bg-red-500 hover:bg-red-600'
                }`}
              >
                Từ chối
              </button>
              <button
                onClick={() => handleStatusUpdate(1)}
                disabled={loading}
                className={`inline-flex items-center justify-center text-white rounded-md py-4 px-10 text-center font-medium lg:px-8 xl:px-10 ${
                  loading ? 'bg-gray-400' : 'bg-[#3C50E0] hover:bg-[#364bd1]'
                }`}
              >
                Duyệt
              </button>
            </>
          ) : (
            <div className="inline-flex items-center justify-center text-green-500 rounded-md py-4 px-10 text-center font-medium lg:px-8 xl:px-10 bg-gray-500">
              Đã xử lý
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <ContractInfo data={claim} />
        <GuestInfo data={claim} />
        <ClaimInfo data={claim} />
        <ClaimedUserInfo data={claim} />
      </div>
    </div>
  )
}

